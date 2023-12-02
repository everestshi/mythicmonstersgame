"use strict";


//New game
const game = new Game();

// Load NPC images
const npcProfessorImage = new Image();
npcProfessorImage.src = "/images/NPCs/MM-Professor-Front.png";

const npcLeaderImage = new Image();
npcLeaderImage.src = "/images/NPCs/MM-leader.png";

const npcBridgemanImage = new Image();
npcBridgemanImage.src = "/images/NPCs/MM-bridgeman.png";

const npcTrainerImage = new Image();
npcTrainerImage.src = "/images/NPCs/MM-trainee.png";

const npcBoatCaptainImage = new Image();
npcBoatCaptainImage.src = "/images/NPCs/MM-boatcaptain.png";

// Load Player Image
const playerImage = new Image();
playerImage.src = "../images/MM-Protagonist.png";

//player sprite
const player = new Player({
  position: {
    x: canvas.width / 2 - 24,
    y: canvas.height / 2 - 60,
  },
  image: playerImage,
  srcX: (playerImage.width / 56) * 3,
  srcY: playerImage.height / 120,
  srcWidth: playerImage.width / 56,
  srcHeight: playerImage.height / 20,
  width: playerImage.width / 56,
  height: playerImage.height / 20,
});

//Professor sprite
const professor = new NPC({
  position: {
    x: canvas.width / 2 - 88,
    y: canvas.height / 2 - 2350,
  },
  image: npcProfessorImage,
  srcX: 0,
  srcY: 0,
  srcWidth: npcProfessorImage.width,
  srcHeight: npcProfessorImage.height,
  width: npcProfessorImage.width,
  height: npcProfessorImage.height,
});

//Leader sprite
const leaderMonster = new Monster({...monsters.Fangtomask, level: 12});
const leader = new NPC({
  position: {
    x: canvas.width / 2 + 4265,
    y: canvas.height / 2 - 2700,
  },
  image: npcLeaderImage,
  srcX: 0,
  srcY: 0,
  srcWidth: npcProfessorImage.width,
  srcHeight: npcProfessorImage.height,
  width: npcProfessorImage.width,
  height: npcProfessorImage.height,
});
leader.addToNpcParty(leaderMonster);

//Bridgeman sprite
const bridgeman = new NPC({
    position: {
        x: canvas.width / 2 + 1520,
        y: canvas.height / 2 - 610,
    },
    image: npcBridgemanImage,
    srcX: (npcBridgemanImage.width / 4) * 2, // The third sprite (zero-indexed)
    srcY: 0,
    srcWidth: npcBridgemanImage.width / 4,
    srcHeight: npcBridgemanImage.height,
    width: npcBridgemanImage.width / 4,
    height: npcBridgemanImage.height,
});

//Bridgeman sprite
const boatCaptain = new NPC({
    position: {
        x: canvas.width / 2 - 470,
        y: canvas.height / 2 - 361,
    },
    image: npcBoatCaptainImage,
    srcX: 0,
    srcY: 0,
    srcWidth: npcBoatCaptainImage.width,
    srcHeight: npcBoatCaptainImage.height,
    width: npcBoatCaptainImage.width,
    height: npcBoatCaptainImage.height,
});

const trainer1Monster = new Monster({...monsters.Pompet, level: 10});
//Trainer1 sprite
const trainer1 = new NPC({
    position: {
        x: canvas.width / 2 + 4710,
        y: canvas.height / 2 - 612,
    },
    image: npcTrainerImage,
    srcX: (npcTrainerImage.width / 4) * 3, 
    srcY: 0,
    srcWidth: npcTrainerImage.width / 4,
    srcHeight: npcTrainerImage.height,
    width: npcTrainerImage.width / 4,
    height: npcTrainerImage.height,
    party: []
});
trainer1.addToNpcParty(trainer1Monster);


const trainer2Monster = new Monster({...monsters.Dampurr, level: 10});
//Trainer2 sprite
const trainer2 = new NPC({
    position: {
        x: canvas.width / 2 + 2670,
        y: canvas.height / 2 - 2406,
    },
    image: npcTrainerImage,
    srcX: (npcTrainerImage.width / 4) * 2, 
    srcY: 0,
    srcWidth: npcTrainerImage.width / 4,
    srcHeight: npcTrainerImage.height,
    width: npcTrainerImage.width / 4,
    height: npcTrainerImage.height,
    party: [trainer2Monster]
});
trainer2.addToNpcParty(trainer2Monster);

const trainer3Monster = new Monster({...monsters.Bonfur, level: 10});
//Trainer3 sprite
const trainer3 = new NPC({
    position: {
        x: canvas.width / 2 + 4584,
        y: canvas.height / 2 + 348,
    },
    image: npcTrainerImage,
    srcX: (npcTrainerImage.width / 4), 
    srcY: 0,
    srcWidth: npcTrainerImage.width / 4,
    srcHeight: npcTrainerImage.height,
    width: npcTrainerImage.width / 4,
    height: npcTrainerImage.height,
    party: [trainer3Monster]
});
trainer3.addToNpcParty(trainer3Monster);

//create collisions map for boundaries -------------
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 100) {
  collisionsMap.push(collisions.slice(i, 100 + i));
}

const boundaries = [];
collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 21856) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
    }
  });
});

//create battlezones map -----------------------------
const battleZonesMap = [];
for (let i = 0; i < battleZonesData.length; i += 100) {
  battleZonesMap.push(battleZonesData.slice(i, 100 + i));
}

const battleZones = [];
battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 21856) {
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
    }
  });
});

// Create Image objects for the background, foreground, player
const image = new Image();
image.src = "../images/Mavis-Island.png";

const foregroundImage = new Image();
foregroundImage.src = "../images/Foreground-Layers.png";


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
    pressed: false,
  },
  arrowRight: {
    pressed: false,
  },
  arrowDown: {
    pressed: false,
  },
  arrowLeft: {
    pressed: false,
  },
};

//collision function
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width - 8 >= rectangle2.position.x &&
    rectangle1.position.x + 8 <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y + 48 <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height - 16 >= rectangle2.position.y
  );
}

// Define sprite frames for player directions
const playerFrames = {
  up: [
    {
      image: playerImage,
      srcX: playerImage.width / 56,
      srcY: playerImage.height / 120,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Static frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 7,
      srcY: (playerImage.height / 120) * 13,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // First movement frame
    {
      image: playerImage,
      srcX: playerImage.width / 56,
      srcY: playerImage.height / 120,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Static frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 10,
      srcY: (playerImage.height / 120) * 13,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Second movement frame        // Add movement frames
  ],
  down: [
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 3,
      srcY: playerImage.height / 120,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Static frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 19,
      srcY: (playerImage.height / 120) * 13,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // First movement frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 3,
      srcY: playerImage.height / 120,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Static frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 22,
      srcY: (playerImage.height / 120) * 13,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Second movement frame
  ],
  left: [
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 2,
      srcY: playerImage.height / 120,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Static frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 13,
      srcY: (playerImage.height / 120) * 13,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // First movement frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 2,
      srcY: playerImage.height / 120,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Static frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 16,
      srcY: (playerImage.height / 120) * 13,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Second movement frame        // Add movement frames
  ],
  right: [
    {
      image: playerImage,
      srcX: 0,
      srcY: playerImage.height / 120,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Static frame
    {
      image: playerImage,
      srcX: playerImage.width / 56,
      srcY: (playerImage.height / 120) * 13,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // First movement frame
    {
      image: playerImage,
      srcX: 0,
      srcY: playerImage.height / 120,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Static frame
    {
      image: playerImage,
      srcX: (playerImage.width / 56) * 4,
      srcY: (playerImage.height / 120) * 13,
      srcWidth: playerImage.width / 56,
      srcHeight: playerImage.height / 20,
    }, // Second movement frame        // Add movement frames
  ],
};

// Initialize player direction and frame index
let playerDirection = "down"; // Set the default direction
let frameIndex = 0; // Current frame index
const frameDelay = 30; // Delay between frame changes
let lastFrameTime = 0; // Variable to keep track of the last frame time

// Update player sprite based on direction and frame index
function updatePlayerSprite() {
  const currentFrames = playerFrames[playerDirection];
  const frame = currentFrames[frameIndex];
  player.srcX = frame.srcX;
  player.srcY = frame.srcY;
  player.srcWidth = frame.srcWidth;
  player.srcHeight = frame.srcHeight;
}

function getEnemyMonster() {
    const monsterKeys = Object.keys(wildMonsters);
    const enemyMonsterKey =
      monsterKeys[Math.floor(Math.random() * monsterKeys.length)];
    return new Monster(wildMonsters[enemyMonsterKey]);
  }

const movables = [
  background,
  foreground,
  ...boundaries,
  ...battleZones,
  professor,
  leader,
  bridgeman,
  trainer1,
  trainer2,
  trainer3,
  boatCaptain
];

//battle object
const battle = {
  initiated: false,
};

let animationId;
//animation loop
function animate() {
    animationId = window.requestAnimationFrame(animate);
  //draw sprites
  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  battleZones.forEach((battleZone) => {
    battleZone.draw();
  });
  professor.draw();
  leader.draw();
  bridgeman.draw();
  if (game.acceptedChallenge) {
    trainer1.draw();
    trainer2.draw();
    trainer3.draw();
  }
  if (game.endGame) {
    boatCaptain.draw();
  }

  player.draw();
  foreground.draw();

  //player movement
  let moving = true;
  player.moving = false;

  //if battle initiates, don't call the below
  if (battle.initiated) {
    return;
  }

  //activate battle
  if (
    keys.arrowDown.pressed ||
    keys.arrowLeft.pressed ||
    keys.arrowRight.pressed ||
    keys.arrowUp.pressed
  ) {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone,
        }) &&
        Math.random() < 0.005
      ) {
        frameIndex = 0;
        updatePlayerSprite();
        console.log("activate battle");
        let myMonster = player.party[0];
        let enemyMonster = getEnemyMonster();
          

        //deactivate current animation loop
        window.cancelAnimationFrame(animationId);

        battle.initiated = true;
        gsap.to("#battleTransition", {
          opacity: 1,
          repeat: 3,
          yoyo: true,
          duration: 0.4,
          onComplete() {
            gsap.to("#battleTransition", {
              opacity: 1,
              duration: 0.4,
              onComplete() {
                //activate new animation loop
                initBattle(enemyMonster, myMonster);
                animateBattle();
                gsap.to("#battleTransition", {
                  opacity: 0,
                  duration: 0.4,
                });
              },
            });
          },
        });
        break;
      }
    }
  }


  let interactingWithNPC = false; // Flag to track overall NPC interaction

  //player boundary movement moving
  if (keys.arrowUp.pressed && lastKey === "ArrowUp") {
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 4,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    // Check collision with NPCs
    for (let i = 0; i < npcs.length; i++) {
      const npc = npcs[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...npc,
            position: {
              x: npc.position.x,
              y: npc.position.y + 4,
            },
          },
        })
      ) {
        moving = false;
        displayNPCDialogue(npc);
        interactingWithNPC = true;
        break; // Exit loop after interacting with the first NPC
      }
    }

    if (!interactingWithNPC) {
      hideNPCDialogue(); // Function to hide the NPC dialogue
    }

    if (moving) {
      movables.forEach((movable) => (movable.position.y += 3));
    }
  } else if (keys.arrowRight.pressed && lastKey === "ArrowRight") {
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 4,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    // Check collision with NPCs
    for (let i = 0; i < npcs.length; i++) {
      const npc = npcs[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...npc,
            position: {
              x: npc.position.x - 4,
              y: npc.position.y,
            },
          },
        })
      ) {
        moving = false;
        displayNPCDialogue(npc);
        interactingWithNPC = true;
        break; // Exit loop after interacting with the first NPC
      }
    }

    if (!interactingWithNPC) {
        hideNPCDialogue(); // Function to hide the NPC dialogue
      }

    if (moving) {
      movables.forEach((movable) => (movable.position.x -= 3));
    }
  } else if (keys.arrowDown.pressed && lastKey === "ArrowDown") {
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 4,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    // Check collision with NPCs
    for (let i = 0; i < npcs.length; i++) {
      const npc = npcs[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...npc,
            position: {
              x: npc.position.x,
              y: npc.position.y - 4,
            },
          },
        })
      ) {
        moving = false;
        displayNPCDialogue(npc);
        interactingWithNPC = true;
        break; // Exit loop after interacting with the first NPC
      }
    }

    if (!interactingWithNPC) {
        hideNPCDialogue(); // Function to hide the NPC dialogue
      }

    if (moving) {
      movables.forEach((movable) => (movable.position.y -= 3));
    }
  } else if (keys.arrowLeft.pressed && lastKey === "ArrowLeft") {
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 4,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    // Check collision with NPCs
    for (let i = 0; i < npcs.length; i++) {
      const npc = npcs[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...npc,
            position: {
              x: npc.position.x + 4,
              y: npc.position.y,
            },
          },
        })
      ) {
        moving = false;
        displayNPCDialogue(npc);
        interactingWithNPC = true;
        break; // Exit loop after interacting with the first NPC
      }
    }

    if (!interactingWithNPC) {
        hideNPCDialogue(); // Function to hide the NPC dialogue
      }

    if (moving) {
      movables.forEach((movable) => (movable.position.x += 3));
    }
  }

  if (player.moving) {
    // Update player sprite based on direction and frame index
    updatePlayerSprite();

    lastFrameTime++;

    if (lastFrameTime % frameDelay === 0) {
      // Update frame index (to animate)
      if (frameIndex < playerFrames[playerDirection].length - 1) {
        frameIndex++;
      } else {
        frameIndex = 0; // Reset to the first frame
      }
    }
  } else {
    // Reset frameIndex when not moving
    frameIndex = 0;
    updatePlayerSprite();
  }
}

// Wait for images to load NEED TO ADD FOREGROUND AND BOUNDARY
image.onload = function () {
  console.log("image loaded");
    animate();
  };


//player input
let lastKey = "";
$(document)
  .keydown(function (event) {
    console.log(event.key);
    switch (event.key) {
      case "ArrowUp":
        keys.arrowUp.pressed = true;
        lastKey = "ArrowUp";
        playerDirection = "up"; // Set player direction to up
        break;
      case "ArrowRight":
        keys.arrowRight.pressed = true;
        lastKey = "ArrowRight";
        playerDirection = "right"; // Set player direction to right
        break;
      case "ArrowDown":
        keys.arrowDown.pressed = true;
        lastKey = "ArrowDown";
        playerDirection = "down"; // Set player direction to down
        break;
      case "ArrowLeft":
        keys.arrowLeft.pressed = true;
        lastKey = "ArrowLeft";
        playerDirection = "left"; // Set player direction to left
        break;
    }
  })
  .keyup(function (event) {
    switch (event.key) {
      case "ArrowUp":
        keys.arrowUp.pressed = false;
        break;
      case "ArrowRight":
        keys.arrowRight.pressed = false;
        break;
      case "ArrowDown":
        keys.arrowDown.pressed = false;
        break;
      case "ArrowLeft":
        keys.arrowLeft.pressed = false;
        break;
    }
    console.log(keys);
  });