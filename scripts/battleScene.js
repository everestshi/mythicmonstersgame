"use strict";

//battle animation------------------------------------------------------
const battleBackgroundImage = new Image();
battleBackgroundImage.src = "../images/ForestBattleBackground.png";
const battleBackground = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  image: battleBackgroundImage,
});

let lumini;
let renderedSprites;
let battleAnimationId;
let queue;

function getRandomMonster() {
  const monsterKeys = Object.keys(monsters);
  const randomMonsterKey =
    monsterKeys[Math.floor(Math.random() * monsterKeys.length)];
  return new Monster(monsters[randomMonsterKey]);
}

function clearEventListeners() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    const clonedButton = button.cloneNode(true);
    button.parentNode.replaceChild(clonedButton, button);
  });
}

function initBattle() {
  const randomMonster = getRandomMonster();
  const lumini = new Monster(monsters.Lumini); // Assuming Lumini needs to be part of the battle too
  renderedSprites = [randomMonster, lumini];
  queue = [];

  document.querySelector("#userInterface").style.display = "block";
  document.querySelector("#battleDialogue").style.display = "none";
  document.querySelector("#enemyCurrentHealth").style.width = "100%";
  document.querySelector("#myCurrentHealth").style.width = "100%";
  document.querySelector("#enemyName").innerHTML = randomMonster.name;
  document.querySelector("#attacks").replaceChildren();

  const battleButton = document.querySelector("#attackOption");
  battleButton.addEventListener("click", () => {
    //hide battleMenu, show battle moves
    document.querySelector("#battleMenu").style.display = "none";

    //populate attacks for my monster
    lumini.attacks.forEach((attack) => {
      const button = document.createElement("button");
      button.innerHTML = attack.name;
      document.querySelector("#attacks").append(button);
    });

    attachAttackListeners();
  });

  function attachAttackListeners() {
    const attackButtons = document.querySelectorAll("button");
    attackButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML];
        //my attack
        lumini.attack({
          attack: selectedAttack,
          recipient: randomMonster,
        });

        //monster dies
        if (randomMonster.health <= 0) {
          queue.push(() => {
            randomMonster.faint();
          });
          queue.push(() => {
            gsap.to("#battleTransition", {
              opacity: 1,
              onComplete: () => {
                cancelAnimationFrame(battleAnimationId);
                animate();
                document.querySelector("#userInterface").style.display = "none";
                gsap.to("#battleTransition", {
                  opacity: 0,
                });
                battle.initiated = false;
              },
            });
          });
        }

        //enemy attack
        const randomAttack =
          randomMonster.attacks[
            Math.floor(Math.random() * randomMonster.attacks.length)
          ];

        queue.push(() => {
          randomMonster.attack({
            attack: randomAttack,
            recipient: lumini,
          });

          if (lumini.health <= 0) {
            queue.push(() => {
              lumini.faint();
            });
            queue.push(() => {
              gsap.to("#battleTransition", {
                opacity: 1,
                onComplete: () => {
                  cancelAnimationFrame(battleAnimationId);
                  animate();
                  document.querySelector("#userInterface").style.display =
                    "none";
                  gsap.to("#battleTransition", {
                    opacity: 0,
                  });
                  battle.initiated = false;
                },
              });
            });
          }
        });
      });

      button.addEventListener("mouseenter", (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML];
        document.querySelector("#attackType").innerHTML =
          "Attack Type: " + selectedAttack.type;
      });
    });
  }
}

function animateBattle() {
  battleAnimationId = window.requestAnimationFrame(animateBattle);
  battleBackground.draw();
  renderedSprites.forEach((sprite) => {
    sprite.draw();
  });
}

//initBattle();
//animateBattle();

document.querySelector("#battleDialogue").addEventListener("click", (e) => {
  if (queue.length > 0) {
    queue[0]();
    queue.shift();
  } else {
    e.currentTarget.style.display = "none";
  }
});
