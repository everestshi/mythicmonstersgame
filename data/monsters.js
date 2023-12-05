const luminiImageBack = new Image();
luminiImageBack.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Back/Lumini.png";
const luminiImageFront = new Image();
luminiImageFront.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Front/Lumini.png";

const skelleksImageBack = new Image();
skelleksImageBack.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Back/Skelleks.png";
const skelleksImageFront = new Image();
skelleksImageFront.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Front/Skelleks.png";

const dampurrImageBack = new Image();
dampurrImageBack.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Back/Dampurr.png";
const dampurrImageFront = new Image();
dampurrImageFront.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Front/Dampurr.png";

const pompetImageBack = new Image();
pompetImageBack.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Back/Pompet.png";
const pompetImageFront = new Image();
pompetImageFront.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Front/Pompet.png";

const bonfurImageBack = new Image();
bonfurImageBack.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Back/Bonfur.png";
const bonfurImageFront = new Image();
bonfurImageFront.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Front/Bonfur.png";

const fangtomaskImageFront = new Image();
fangtomaskImageFront.src =
  "../images/Monsters/Magiscarf/Battlers Normal/Front/Fangtomask.png";




//Wild Monsters
const upsparkImageFront = new Image();
upsparkImageFront.src = "../images/Monsters/Magiscarf/Battlers Normal/Front/Upspark.png";

const blonkImageFront = new Image();
blonkImageFront.src = "../images/Monsters/Magiscarf/Battlers Normal/Front/Blonk.png";

const rootsyImageFront = new Image();
rootsyImageFront.src = "../images/Monsters/Magiscarf/Battlers Normal/Front/Rootsy.png";

const chickiteImageFront = new Image();
chickiteImageFront.src = "../images/Monsters/Magiscarf/Battlers Normal/Front/Chickite.png";

const fryrryImageFront = new Image();
fryrryImageFront.src = "../images/Monsters/Magiscarf/Battlers Normal/Front/Fryrry.png";

const chartailImageFront = new Image();
chartailImageFront.src = "../images/Monsters/Magiscarf/Battlers Normal/Front/Chartail.png";

const flooieImageFront = new Image();
flooieImageFront.src = "../images/Monsters/Magiscarf/Battlers Normal/Front/Flooie.png";

const burrubImageFront = new Image();
burrubImageFront.src = "../images/Monsters/Magiscarf/Battlers Normal/Front/Burrub.png";

// Define types and their advantages and disadvantages
const typeMatchups = {
  Normal: {
    superEffective: ["Dark"],
    weakAgainst: ["Rock"],
  },
  Fire: {
    superEffective: ["Grass", "Bug", "Dark"],
    weakAgainst: ["Water", "Light", "Rock"],
  },
  Water: {
    superEffective: ["Fire", "Dark", "Rock"],
    weakAgainst: ["Grass", "Light"],
  },
  Grass: {
    superEffective: ["Water", "Dark", "Rock"],
    weakAgainst: ["Fire", "Light", "Bug", "Flying"],
  },
  Electric: {
    superEffective: ["Water", "Flying", "Dark", "Normal"],
    weakAgainst: ["Rock", "Light"],
  },
  Rock: {
    superEffective: ["Fire", "Dark", "Normal", "Electric"],
    weakAgainst: ["Water", "Grass", "Light"],
  },
  Flying: {
    superEffective: ["Bug", "Grass", "Dark"],
    weakAgainst: ["Rock", "Light", "Electric"],
  },
  Bug: {
    superEffective: ["Grass", "Dark"],
    weakAgainst: ["Fire", "Rock", "Flying"],
  },
  Light: {
    superEffective: [
      "Fire",
      "Water",
      "Grass",
      "Dark",
      "Rock",
      "Electric",
      "Flying",
      "Light",
    ],
    weakAgainst: ["Light",],
  },
  Dark: {
    superEffective: [
      "Fire",
      "Water",
      "Grass",
      "Light",
      "Dark",
      "Bug",
      "Rock",
      "Normal",
      "Electric",
      "Flying",
    ],
    weakAgainst: [
    ],
  },
};

// Check if an attack is super effective or weak against a target
function checkTypeMatchup(attackType, targetTypes) {
  let result = "";

  for (const type of targetTypes) {
    if (typeMatchups[type]) {
      if (
        typeMatchups[type].superEffective &&
        typeMatchups[type].superEffective.includes(attackType)
      ) {
        result = "supereffective";
        break;
      } else if (
        typeMatchups[type].weakAgainst &&
        typeMatchups[type].weakAgainst.includes(attackType)
      ) {
        result = "notveryeffective";
        break;
      }
    }
  }
  if (!result) {
    result = "neutral";
  }
  return result;
}

function getRandomLevel() {
  return Math.floor(Math.random() * (7 - 3 + 1)) + 3;
}

const monsters = {
  Lumini: {
    image: {
      source: "../images/Monsters/Magiscarf/Battlers Normal/Front/Lumini.png",
      front: luminiImageFront,
      back: luminiImageBack,
    },
    width: luminiImageFront.width * 1.5,
    height: luminiImageFront.height * 1.5,
    name: "Lumini",
    type: "Light",
    level: 5,
    attacks: [
      attacks.Tackle,
      attacks.Lightball,
      attacks.Headbutt,
      attacks.MegaLightball,
    ],
    baseHealth: 50,
    baseAttack: 50,
    baseDefense: 45,
    baseSpeed: 80,
    isWild: false,
  },

  Skelleks: {
    image: {
      source: "../images/Monsters/Magiscarf/Battlers Normal/Front/Skelleks.png",
      front: skelleksImageFront,
      back: skelleksImageBack,
    },
    width: skelleksImageFront.width * 1.5,
    height: skelleksImageFront.height * 1.5,
    name: "Skelleks",
    type: "Dark",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.Headbutt, attacks.ShadowStrike, attacks.DescendingDark],
    baseHealth: 50,
    baseAttack: 60,
    baseDefense: 90,
    baseSpeed: 25,
    isWild: false,
  },

  Dampurr: {
    image: {
      source: "../images/Monsters/Magiscarf/Battlers Normal/Front/Dampurr.png",
      front: dampurrImageFront,
      back: dampurrImageBack,
    },
    width: dampurrImageFront.width * 1.5,
    height: dampurrImageFront.height * 1.5,
    name: "Dampurr",
    type: "Water",
    level: getRandomLevel(),
    attacks: [attacks.Scratch, attacks.Headbutt, attacks.Aquamist, attacks.RipeTideBlast],
    baseHealth: 40,
    baseAttack: 60,
    baseDefense: 50,
    baseSpeed: 75,
    isWild: false,
  },

  Pompet: {
    image: {
      source: "../images/Monsters/Magiscarf/Battlers Normal/Front/Pompet.png",
      front: pompetImageFront,
      back: pompetImageBack,
    },
    width: pompetImageFront.width * 1.5,
    height: pompetImageFront.height * 1.5,
    name: "Pompet",
    type: "Grass",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.Headbutt, attacks.LeafWhirl, attacks.BranchWhip],
    baseHealth: 70,
    baseAttack: 50,
    baseDefense: 75,
    baseSpeed: 30,
    isWild: false,
  },

  Bonfur: {
    image: {
      source: "../images/Monsters/Magiscarf/Battlers Normal/Front/Bonfur.png",
      front: bonfurImageFront,
      back: bonfurImageBack,
    },
    width: bonfurImageFront.width * 1.5,
    height: bonfurImageFront.height * 1.5,
    name: "Bonfur",
    type: "Fire",
    level: getRandomLevel(),
    attacks: [attacks.Scratch, attacks.Headbutt, attacks.PyroBall, attacks.EmberBurst],
    baseHealth: 50,
    baseAttack: 75,
    baseDefense: 40,
    baseSpeed: 60,
  },

  Fangtomask: {
    image: {
      front: fangtomaskImageFront,
      back: "",
    },
    width: fangtomaskImageFront.width * 1.5,
    height: fangtomaskImageFront.height * 1.5,
    name: "Fangtomask",
    type: "Dark",
    level: getRandomLevel(),
    attacks: [attacks.Scratch, attacks.Headbutt, attacks.ShadowStrike, attacks.ShadeClaw],
    baseHealth: 80,
    baseAttack: 80,
    baseDefense: 80,
    baseSpeed: 60,
  },
};

const wildMonsters = {
  Upspark: {
    image: {
      front: upsparkImageFront,
      back: "",
    },
    width: upsparkImageFront.width * 1.5,
    height: upsparkImageFront.height * 1.5,
    name: "Upspark",
    type: "Electric",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.Scratch, attacks.SparkZap],
    baseHealth: 40,
    baseAttack: 45,
    baseDefense: 45,
    baseSpeed: 70,
  },

  Blonk: {
    image: {
      front: blonkImageFront,
      back: "",
    },
    width: blonkImageFront.width * 1.5,
    height: blonkImageFront.height * 1.5,
    name: "Blonk",
    type: "Rock",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.Headbutt, attacks.PebbleRush],
    baseHealth: 60,
    baseAttack: 40,
    baseDefense: 80,
    baseSpeed: 15,
  },

  Rootsy: {
    image: {
      front: rootsyImageFront,
      back: "",
    },
    width: rootsyImageFront.width * 1.5,
    height: rootsyImageFront.height * 1.5,
    name: "Rootsy",
    type: "Normal",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.Scratch, attacks.Headbutt],
    baseHealth: 50,
    baseAttack: 50,
    baseDefense: 50,
    baseSpeed: 60,
  },

  Chickite: {
    image: {
      front: chickiteImageFront,
      back: "",
    },
    width: chickiteImageFront.width * 1.5,
    height: chickiteImageFront.height * 1.5,
    name: "Chickite",
    type: "Flying",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.WingFlap],
    baseHealth: 50,
    baseAttack: 50,
    baseDefense: 40,
    baseSpeed: 65,
  },

  Fryryy: {
    image: {
      front: fryrryImageFront,
      back: "",
    },
    width: fryrryImageFront.width * 1.5,
    height: fryrryImageFront.height * 1.5,
    name: "Fryrry",
    type: "Bug",
    level: getRandomLevel(),
    attacks: [attacks.BuzzSting],
    baseHealth: 40,
    baseAttack: 50,
    baseDefense: 30,
    baseSpeed: 80,
  },

  Chartail: {
    image: {
      front: chartailImageFront,
      back: "",
    },
    width: chartailImageFront.width * 1.5,
    height: chartailImageFront.height * 1.5,
    name: "Chartail",
    type: "Fire",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.WingFlap, attacks.PyroBall],
    baseHealth: 50,
    baseAttack: 60,
    baseDefense: 40,
    baseSpeed: 75,
  },

  Flooie: {
    image: {
      front: flooieImageFront,
      back: "",
    },
    width: flooieImageFront.width * 1.5,
    height: flooieImageFront.height * 1.5,
    name: "Flooie",
    type: "Water",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.Headbutt, attacks.Aquamist],
    baseHealth: 60,
    baseAttack: 50,
    baseDefense: 50,
    baseSpeed: 50,
  },

  Burrub: {
    image: {
      front: burrubImageFront,
      back: "",
    },
    width: burrubImageFront.width * 1.5,
    height: burrubImageFront.height * 1.5,
    name: "Burrub",
    type: "Grass",
    level: getRandomLevel(),
    attacks: [attacks.Tackle, attacks.BuzzSting, attacks.LeafWhirl],
    baseHealth: 45,
    baseAttack: 70,
    baseDefense: 35,
    baseSpeed: 55,
  },
};
