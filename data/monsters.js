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


const monsters = {
    Lumini : {
        image: luminiImage,
        width: luminiImage.width * 1.5,
        height: luminiImage.height * 1.5,
        name: 'Lumini',
        attacks: [attacks.Tackle, attacks.Lightball]
    },

    Skelleks: {
        image: skelleksImage,
        width: skelleksImage.width * 1.5,
        height: skelleksImage.height * 1.5,
        isEnemy: true,
        name: 'Skelleks',
        attacks: [attacks.Tackle, attacks.Headbutt]
    },
    
    Asterish: {
        image: asterishImage,
        width: asterishImage.width * 1.5,
        height: asterishImage.height * 1.5,
        isEnemy: true,
        name: 'Asterish',
        attacks: [attacks.Tackle, attacks.Headbutt]
    },

    Pompet: {
        image: pompetImage,
        width: pompetImage.width * 1.5,
        height: pompetImage.height * 1.5,
        isEnemy: true,
        name: 'Pompet',
        attacks: [attacks.Tackle, attacks.Headbutt]
    },

    Bonfur: {
        image: bonfurImage,
        width: bonfurImage.width * 1.5,
        height: bonfurImage.height * 1.5,
        isEnemy: true,
        name: 'Bonfur',
        attacks: [attacks.Tackle, attacks.Headbutt]
    },
}