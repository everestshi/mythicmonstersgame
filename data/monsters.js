const luminiImage = new Image();
luminiImage.src = '../images/Monsters/Magiscarf/Battlers Normal/Back/Lumini.png';

const skelleksImage = new Image();
skelleksImage.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Skelleks.png';

const monsters = {
    Lumini : {
        position: {
            x: 235,
            y: 315
        },
        image: luminiImage,
        width: luminiImage.width * 1.5,
        height: luminiImage.height * 1.5,
        name: 'Lumini',
        attacks: [attacks.Tackle, attacks.Lightball]
    },

    Skelleks: {
        position: {
            x: 665,
            y: 140
        },
        image: skelleksImage,
        width: skelleksImage.width * 1.5,
        height: skelleksImage.height * 1.5,
        isEnemy: true,
        name: 'Skelleks',
        attacks: [attacks.Tackle, attacks.Headbutt]
    }
}