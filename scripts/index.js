"use strict";

//initialize game canvas and context
const canvas = $('#gameCanvas')[0];
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

//create collisions map
const collisionsMap = [];
for (let i = 0; i < collisions.length; i+=100){
    collisionsMap.push(collisions.slice(i, 100 + i));
};

//boundary class
class Boundary {
    static width = 64;
    static height = 64;
    constructor({position}) {
        this.position = position
        this.width = 64
        this.height = 64
    }

    draw() {
        context.fillStyle = 'red';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const offset = {
    x: -544,
    y: -2750
}

const boundaries = [];
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 21856) {
            boundaries.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }
        }))
    }})
})

//draw image as game background
const image = new Image();
image.src = '../images/Mavis-Island.png';
//draw player
const playerImage = new Image();
playerImage.src = '../images/MM-Protagonist.png';

// Use the onload event for the first image
image.onload = function() {
    // When the first image has loaded, use the onload event for the second image
    playerImage.onload = function() {
        // Both images have loaded, start the animation loop
        animate();
    };

    playerImage.src = '../images/MM-Protagonist.png';
};

image.src = '../images/Mavis-Island.png';

//create image classes
/*class Sprite {
    constructor({position, velocity, image}) {
        this.position = position
        this.image = image
    }
    draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
};*/
class Sprite {
    constructor({ position, image, srcX, srcY, srcWidth, srcHeight, width, height }) {
        this.position = position;
        this.image = image;
        this.srcX = srcX || 0;
        this.srcY = srcY || 0;
        this.srcWidth = srcWidth || image.width;
        this.srcHeight = srcHeight || image.height;
        this.width = width || this.srcWidth;
        this.height = height || this.srcHeight;
    }

    draw() {
        context.drawImage(
            this.image,
            this.srcX,
            this.srcY,
            this.srcWidth,
            this.srcHeight,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
}


/*const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
});*/

const background = new Sprite({
    position: { x: offset.x, y: offset.y },
    image: image,
});

const player = new Sprite({
    position: {
        x: canvas.width / 2 - 24,
        y: canvas.height / 2 - 60,
    },
    image: playerImage,
    srcX: playerImage.width / 56 * 3,
    srcY: 0,
    srcWidth: playerImage.width / 56,
    srcHeight: playerImage.height / 20,
    width: playerImage.width / 56,
    height: playerImage.height / 20,
});

const keys = {
    arrowUp: {
        pressed: false
    },
    arrowRight: {
        pressed: false
    },
    arrowDown: {
        pressed: false
    },
    arrowLeft: {
        pressed: false
    }
}

const step = 16/3;
const interval = 500;
let playerMovementInterval;

const movables = [background, ...boundaries];

function rectangularCollision({rectangle1, rectangle2}){
    return(
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
};

//animation loop
function animate() {
    window.requestAnimationFrame(animate);
    background.draw();
    boundaries.forEach(boundary => {
        boundary.draw();
    });
    player.draw();
    let moving = true;
    if (keys.arrowUp.pressed && lastKey === 'ArrowUp') {
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y
                    }}
                })
            ){
                moving = false;
                break;
            }
        }
        if (moving) {
            movables.forEach(movable => movable.position.y += 4)
        }
    } else if (keys.arrowRight.pressed && lastKey === 'ArrowRight') {
        movables.forEach(movable => movable.position.x -= 4)
    } else if (keys.arrowDown.pressed && lastKey === 'ArrowDown') {
        movables.forEach(movable => movable.position.y -= 4)
    } else if (keys.arrowLeft.pressed && lastKey === 'ArrowLeft') {
        movables.forEach(movable => movable.position.x += 4)
    }
};

let lastKey = '';
$(document).keydown(function(event) {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
            keys.arrowUp.pressed = true
            lastKey = 'ArrowUp'
            break;
        case 'ArrowRight':
            keys.arrowRight.pressed = true
            lastKey = 'ArrowRight'
            break;
        case 'ArrowDown':
            keys.arrowDown.pressed = true
            lastKey = 'ArrowDown'
            break;
        case 'ArrowLeft':
            keys.arrowLeft.pressed = true
            lastKey = 'ArrowLeft'
            break;
    }
}).keyup(function(event) {
    switch (event.key) {
        case 'ArrowUp':
            keys.arrowUp.pressed = false;
            break;
        case 'ArrowRight':
            keys.arrowRight.pressed = false;
            break;
        case 'ArrowDown':
            keys.arrowDown.pressed = false;
            break;
        case 'ArrowLeft':
            keys.arrowLeft.pressed = false;
            break;
    } console.log(keys);
});