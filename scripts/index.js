"use strict";

//initialize game canvas and context-----------
const canvas = $('#gameCanvas')[0];
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

//CLASS CREATION-------------------------------
class Boundary {
    static width = 64;
    static height = 64;
    constructor({position}) {
        this.position = position
        this.width = 64
        this.height = 64
    }

    draw() {
        context.fillStyle = 'rgba(255, 0, 0, 0)';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

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
//----------------------------------------

const offset = {
    x: -544,
    y: -2750
}

//create collisions map for boundaries -------------
const collisionsMap = [];
for (let i = 0; i < collisions.length; i+=100){
    collisionsMap.push(collisions.slice(i, 100 + i));
};

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

// Create Image objects for the background, player, foreground
const image = new Image();
image.src = '../images/Mavis-Island.png';

const foregroundImage = new Image();
foregroundImage.src = '../images/Foreground-Layers.png'

const playerImage = new Image();
playerImage.src = '../images/MM-Protagonist.png';

// Wait for both images to load
image.onload = function () {
    playerImage.onload = function () {
        // Both images have loaded, start the animation loop
        animate();
    };
};

//player sprite
const player = new Sprite({
    position: {
        x: canvas.width / 2 - 24,
        y: canvas.height / 2 - 60,
    },
    image: playerImage,
    srcX: playerImage.width / 56 * 3,
    srcY: playerImage.height / 120,
    srcWidth: playerImage.width / 56,
    srcHeight: playerImage.height / 20,
    width: playerImage.width / 56,
    height: playerImage.height / 20,
});

//background sprite
const background = new Sprite({
    position: { x: offset.x, y: offset.y },
    image: image,
});

//foreground sprite
const foreground = new Sprite({
    position: { x: offset.x, y: offset.y },
    image: foregroundImage,
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

const interval = 500;
let playerMovementInterval;

const movables = [background, foreground, ...boundaries];

//collision function
function rectangularCollision({rectangle1, rectangle2}){
    return(
        rectangle1.position.x + rectangle1.width - 8 >= rectangle2.position.x &&
        rectangle1.position.x + 8<= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y + 48 <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height - 16 >= rectangle2.position.y
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
    foreground.draw();

    let moving = true;
    if (keys.arrowUp.pressed && lastKey === 'ArrowUp') {
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 4
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
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x - 4,
                        y: boundary.position.y
                    }}
                })
            ){
                moving = false;
                break;
            }
        }
        if (moving) {
            movables.forEach(movable => movable.position.x -= 4)
        }
    } else if (keys.arrowDown.pressed && lastKey === 'ArrowDown') {
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 4
                    }}
                })
            ){
                moving = false;
                break;
            }
        }
        if (moving) {
            movables.forEach(movable => movable.position.y -= 4)
        }
    } else if (keys.arrowLeft.pressed && lastKey === 'ArrowLeft') {
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x + 4,
                        y: boundary.position.y
                    }}
                })
            ){
                moving = false;
                break;
            }
        }
        if (moving) {
            movables.forEach(movable => movable.position.x += 4)
        }
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