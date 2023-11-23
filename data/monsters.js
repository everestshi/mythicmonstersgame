const luminiImage = new Image();
luminiImage.src = '../images/Monsters/Magiscarf/Battlers Normal/Back/Lumini.png';
const skelleksImage = new Image();
skelleksImage.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Skelleks.png';
const asterishImage = new Image();
asterishImage.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Asterish.png';
const pompetImage = new Image();
pompetImage.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Pompet.png';
const bonfurImage = new Image();
bonfurImage.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Bonfur.png';


function getRandomLevel() {
    return Math.floor(Math.random() * (7 - 3 + 1)) + 3;
  }

const monsters = {
    Lumini : {
        image: luminiImage,
        width: luminiImage.width * 1.5,
        height: luminiImage.height * 1.5,
        name: 'Lumini',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Lightball],
        baseHealth: 80,
        baseSpeed: 10,
    },

    Skelleks: {
        image: skelleksImage,
        width: skelleksImage.width * 1.5,
        height: skelleksImage.height * 1.5,
        isEnemy: true,
        name: 'Skelleks',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Headbutt],
        baseSpeed: 2,
    },
    
    Asterish: {
        image: asterishImage,
        width: asterishImage.width * 1.5,
        height: asterishImage.height * 1.5,
        isEnemy: true,
        name: 'Asterish',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Headbutt],
        baseSpeed: 5,
    },

    Pompet: {
        image: pompetImage,
        width: pompetImage.width * 1.5,
        height: pompetImage.height * 1.5,
        isEnemy: true,
        name: 'Pompet',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Headbutt],
        baseSpeed: 9,
    },

    Bonfur: {
        image: bonfurImage,
        width: bonfurImage.width * 1.5,
        height: bonfurImage.height * 1.5,
        isEnemy: true,
        name: 'Bonfur',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Headbutt],
        baseHealth: 40,
        baseSpeed: 7,
    },
}