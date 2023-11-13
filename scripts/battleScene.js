"use strict";

//battle animation------------------------------------------------------
const battleBackgroundImage = new Image();
battleBackgroundImage.src = '../images/ForestBattleBackground.png';
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
});

const skelleks = new Monster(monsters.Skelleks);
const lumini = new Monster(monsters.Lumini);

const renderedSprites = [skelleks, lumini];


//populate attacks for my monster
lumini.attacks.forEach(attack => {
    const button = document.createElement('button');
    button.innerHTML = attack.name
    document.querySelector('#attacks').append(button)
})

function animateBattle() {
    window.requestAnimationFrame(animateBattle);
    battleBackground.draw();
    renderedSprites.forEach((sprite) => {
        sprite.draw();
    })
};

animateBattle();

const queue = [];

//event listeners for battle
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML];
        lumini.attack({
            attack: selectedAttack,
            recipient: skelleks
        })
        
        const randomAttack = skelleks.attacks[Math.floor(Math.random() * skelleks.attacks.length)];

        queue.push(() => {
            skelleks.attack({
                attack: randomAttack,
                recipient: lumini
            })
        })
    })
})

document.querySelector('#battleDialogue').addEventListener('click', (e) => {
    if (queue.length > 0) {
        queue[0]();
        queue.shift();
    } else {
        e.currentTarget.style.display = 'none'
    }
})