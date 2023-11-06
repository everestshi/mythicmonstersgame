"use strict";

//initialize game canvas and context
const canvas = $('#gameCanvas')[0];
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

//draw image as game background
const image = new Image();
image.src = '../images/Mavis-Island.png';
//draw player
const playerImage = new Image();
playerImage.src = '../images/MM-Protagonist.png';

//animation loop
function animate() {
    window.requestAnimationFrame(animate);
    context.drawImage(image, -544, -2720);
    context.drawImage(
        playerImage, 
        playerImage.width/56 * 3,
        0,
        playerImage.width/56,
        playerImage.height/20,
        canvas.width/2 - 24, 
        canvas.height/2 - 60,
        playerImage.width/56,
        playerImage.height/20);
    console.log('animate');
};

//move player
$(document).keydown(function(event) {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
            console.log('Goin Up');
            break;
        case 'ArrowRight':
            console.log('Goin Up');
            break;
        case 'ArrowDown':
            console.log('Goin Up');
            break;
        case 'ArrowLeft':
            console.log('Goin Up');
            break;
    }
});