const luminiImageBack = new Image();
luminiImageBack.src = '../images/Monsters/Magiscarf/Battlers Normal/Back/Lumini.png';
const luminiImageFront = new Image();
luminiImageFront.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Lumini.png';

const skelleksImageBack = new Image();
skelleksImageBack.src = '../images/Monsters/Magiscarf/Battlers Normal/Back/Skelleks.png';
const skelleksImageFront = new Image();
skelleksImageFront.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Skelleks.png';

const dampurrImageBack = new Image();
dampurrImageBack.src = '../images/Monsters/Magiscarf/Battlers Normal/Back/Dampurr.png';
const dampurrImageFront = new Image();
dampurrImageFront.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Dampurr.png';

const pompetImageBack = new Image();
pompetImageBack.src = '../images/Monsters/Magiscarf/Battlers Normal/Back/Pompet.png';
const pompetImageFront = new Image();
pompetImageFront.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Pompet.png';

const bonfurImageBack = new Image();
bonfurImageBack.src = '../images/Monsters/Magiscarf/Battlers Normal/Back/Bonfur.png';
const bonfurImageFront = new Image();
bonfurImageFront.src = '../images/Monsters/Magiscarf/Battlers Normal/Front/Bonfur.png';

// Define types and their advantages and disadvantages
const typeMatchups = {
    Fire: {
      superEffective: ['Grass'],
      weakAgainst: ['Water'],
    },
    Water: {
      superEffective: ['Fire'],
      weakAgainst: ['Grass'],
    },
    Grass: {
      superEffective: ['Water'],
      weakAgainst: ['Fire'],
    },
    Light: {
        superEffective: ['Fire', 'Water', 'Grass', 'Dark'],
        weakAgainst: ['Light', 'Dark'],
    },
    Dark: {
        superEffective: ['Fire', 'Water', 'Grass', 'Light', 'Dark'],
        weakAgainst: ['Fire', 'Water', 'Grass', 'Light', 'Dark'],
    }
  };
  
  // Check if an attack is super effective or weak against a target
  function checkTypeMatchup(attackType, targetTypes) {
    let result = '';
  
    for (const type of targetTypes) {
      if (typeMatchups[type]) {
        if (typeMatchups[type].superEffective && typeMatchups[type].superEffective.includes(attackType)) {
          result = 'supereffective';
          break;
        } else if (typeMatchups[type].weakAgainst && typeMatchups[type].weakAgainst.includes(attackType)) {
          result = 'notveryeffective';
          break;
        }
      }
    }
    if (!result) {
      result = 'neutral';
    }
    return result;
  }

function getRandomLevel() {
    return Math.floor(Math.random() * (7 - 3 + 1)) + 3;
  }

const monsters = {
    Lumini : {
        image: {
          front: luminiImageFront,
          back: luminiImageBack,
        },
        width: luminiImageFront.width * 1.5,
        height: luminiImageFront.height * 1.5,
        name: 'Lumini',
        type: 'Light',
        level: 5,
        attacks: [attacks.Tackle, attacks.Lightball, attacks.Headbutt, attacks.MegaLightball],
        baseHealth: 60,
        baseAttack: 80,
        baseDefense: 50,
        baseSpeed: 60,
    },

    Skelleks: {
      image: {
        front: skelleksImageFront,
        back: skelleksImageBack,
      },
        width: skelleksImageFront.width * 1.5,
        height: skelleksImageFront.height * 1.5,
        name: 'Skelleks',
        type: 'Dark',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Headbutt],
        baseHealth: 30,
        baseAttack: 90,
        baseDefense: 90,
        baseSpeed: 10,
    },
    
    Dampurr: {
      image: {
        front: dampurrImageFront,
        back: dampurrImageBack,
      },
        width: dampurrImageFront.width * 1.5,
        height: dampurrImageFront.height * 1.5,
        name: 'Dampurr',
        type: 'Water',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Headbutt],
        baseHealth: 40,
        baseAttack: 60,
        baseDefense: 40,
        baseSpeed: 75,
    },

    Pompet: {
      image: {
        front: pompetImageFront,
        back: pompetImageBack,
      },
        width: pompetImageFront.width * 1.5,
        height: pompetImageFront.height * 1.5,
        name: 'Pompet',
        type: 'Grass',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Headbutt],
        baseHealth: 80,
        baseAttack: 30,
        baseDefense: 75,
        baseSpeed: 20,
    },

    Bonfur: {
      image: {
        front: bonfurImageFront,
        back: bonfurImageBack,
      },
        width: bonfurImageFront.width * 1.5,
        height: bonfurImageFront.height * 1.5,
        name: 'Bonfur',
        type: 'Fire',
        level: getRandomLevel(),
        attacks: [attacks.Tackle, attacks.Headbutt, attacks.Lightball],
        baseHealth: 50,
        baseAttack: 80,
        baseDefense: 40,
        baseSpeed: 45,
    },
}