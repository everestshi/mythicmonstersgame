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
let renderedSprites;
let battleAnimationId;
let queue;

// main battle function ----------------------------------------------------------
function initBattle(enemyMonster, myMonster) {
  renderedSprites = [enemyMonster, myMonster];
  queue = [];
  let isHealUsed = false; // Flag to track if the heal button has been used
  myMonster.leveledUp = false;

  let healthPercentage = (myMonster.health / myMonster.fullHealth) * 100;

  document.querySelector("#userInterface").style.display = "block";
  document.querySelector("#battleDialogue").style.display = "none";
  document.querySelector("#enemyCurrentHealth").style.width = "100%";
  document.querySelector("#myCurrentHealth").style.width =
    healthPercentage + "%";
  document.querySelector("#enemyName").innerHTML = enemyMonster.name;
  document.querySelector("#enemyLvl").innerHTML = "Lv." + enemyMonster.level;
  document.querySelector("#myName").innerHTML = myMonster.name;
  document.querySelector("#myLvl").innerHTML = "Lv." + myMonster.level;
  document.querySelector("#myHealthStat").innerHTML = myMonster.health;
  document.querySelector("#MyTotalHealthStat").innerHTML =
    "/" + myMonster.fullHealth;
  document.querySelector("#attacks").replaceChildren();

  //refresh all event listeners
  function clearEventListeners() {
    queue = [];
    document.querySelector("#battleDialogue").style.display = "none";
    const buttonsContainer = document.querySelector("#attacks");
    buttonsContainer.innerHTML = ""; // Clear the current buttons

    // Call a function to populate attacks for my monster
    myMonster.attacks.forEach((attack) => {
      const button = document.createElement("button");
      button.innerHTML = attack.name;
      button.classList.add("attackButton"); // Add the class
      document.querySelector("#attacks").append(button);
    });
  }

  //display main battle menu
  function displayBattleMenu() {
    clearEventListeners();
    document.querySelector("#battleMenu").style.display = "flex";
  }

  //end the battle transition to map
  function endBattleTransition() {
    gsap.to("#battleTransition", {
      opacity: 1,
      onComplete: () => {
        cancelAnimationFrame(battleAnimationId);
        animate();
        document.querySelector("#userInterface").style.display = "none";
        gsap.to("#battleTransition", {
          opacity: 0,
        });
        if (trainer1Monster.health <= 0) {
          trainer1.isDefeated = true;
          updateTrainer1Dialogue();
        }
        if (trainer2Monster.health <= 0) {
          trainer2.isDefeated = true;
          updateTrainer2Dialogue();
        }
        if (trainer3Monster.health <= 0) {
          trainer3.isDefeated = true;
          updateTrainer3Dialogue();
        }
        if (trainer1.isDefeated && trainer2.isDefeated && trainer3.isDefeated) {
          updateLeaderDialogue();
        }
        if (leaderMonster.health <= 0) {
          game.beatenLeader = true;
          updateLeaderDialogue();
          updateProfessorDialogueFinal();
        }
        if (player.party[0].health <= 0) {
          handleFaint();
        }
        battle.initiated = false;
      },
    });
  }

  //show battle menu buttons
  function showBattleMenu() {
    displayBattleMenu();

    const battleButton = document.querySelector("#attackOption");
    battleButton.addEventListener("click", () => {
      //hide battleMenu, show battle moves
      document.querySelector("#battleMenu").style.display = "none";
      clearEventListeners(); // Clear event listeners before attaching new ones
      attachAttackListeners();
    });

    // method for healing button
    const healButton = document.querySelector("#healOption");
    healButton.addEventListener("click", () => {
      if (!isHealUsed) {
        document.querySelector("#battleMenu").style.display = "none";
        myMonster.heal();
        isHealUsed = true;
      }
      queue = []; // Clear the queue after healing

      //enemy attack
      const randomAttack =
        enemyMonster.attacks[
          Math.floor(Math.random() * enemyMonster.attacks.length)
        ];

      queue.push(() => {
        enemyMonster.attackMethod({
          attack: randomAttack,
          recipient: myMonster,
        });

        if (myMonster.health <= 0) {
          queue.push(() => {
            myMonster.faint();
          });
          queue.push(() => {
            queue = [];
            endBattleTransition();
          });
        }
        queue.push(() => {
          clearEventListeners();
          displayBattleMenu();
        });
      });
    });
  }

  // show the monster stats
  const battleMenuStats = document.getElementById("statsOption");
  battleMenuStats.addEventListener("click", function () {
    monsterStats.style.display = "flex";
  });

  // run away function
  const runButton = document.querySelector("#runOption");
  clearEventListeners();
  runButton.addEventListener("click", () => {
    document.querySelector("#battleMenu").style.display = "none";

    if (myMonster.speed > enemyMonster.speed) {
      document.querySelector("#battleDialogue").style.display = "block";
      document.querySelector("#battleDialogue").innerHTML = "Ran away safely!";
      queue = [];

      queue.push(() => {
        endBattleTransition();
      });
    } else {
      const chance = Math.random();
      if (chance < 0.5) {
        queue = [];
        document.querySelector("#battleDialogue").style.display = "block";
        document.querySelector("#battleDialogue").innerHTML =
          "Ran away safely!";
        queue.push(() => {
          endBattleTransition();
        });
      } else {
        document.querySelector("#battleDialogue").style.display = "block";
        document.querySelector("#battleDialogue").innerHTML =
          "Unable to run away!";
        queue = [];

        //enemy attack
        const randomAttack =
          enemyMonster.attacks[
            Math.floor(Math.random() * enemyMonster.attacks.length)
          ];

        queue.push(() => {
          enemyMonster.attackMethod({
            attack: randomAttack,
            recipient: myMonster,
          });

          if (myMonster.health <= 0) {
            queue.push(() => {
              myMonster.faint();
            });
            queue.push(() => {
              queue = [];
              endBattleTransition();
            });
          }
          queue.push(() => {
            clearEventListeners();
            displayBattleMenu();
          });
        });
      }
    }
  });

  // attach attack listeners for player monster
  function attachAttackListeners() {
    const attackButtons = document.querySelectorAll(".attackButton");
    attackButtons.forEach((button) => {
      button.addEventListener("mouseenter", (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML];

        if (e.currentTarget.parentElement.id !== "attacks") {
          return; // Exit the event listener without executing the code below
        }
        document.querySelector("#attackType").innerHTML =
          "Attack Type: " + selectedAttack.type;
      });
      button.addEventListener("click", (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML];

        if (myMonster.speed >= enemyMonster.speed) {
          //my attack
          myMonster.attackMethod({
            attack: selectedAttack,
            recipient: enemyMonster,
          });

          //monster dies
          if (enemyMonster.health <= 0) {
            queue.push(() => {
              let expGained = Math.floor(
                (enemyMonster.level ** 2 * myMonster.level) / 3 + 1
              );
              enemyMonster.faint();
              myMonster.gainExperience(expGained);
              if (myMonster.leveledUp) {
                document.querySelector("#battleDialogue").innerHTML =
                  myMonster.name + " has leveled up!";
                document.getElementById("myLvl").innerHTML =
                  "Lv." + myMonster.level;
                document.querySelector("#MyTotalHealthStat").innerHTML =
                  "/" + myMonster.fullHealth;
                  document.querySelector("#myCurrentHealth").style.width =
                  (myMonster.health / myMonster.fullHealth) * 100 + "%";
              }
            });
            queue.push(() => {
              queue = [];
              endBattleTransition();
            });
          }

          //enemy attack
          const randomAttack =
            enemyMonster.attacks[
              Math.floor(Math.random() * enemyMonster.attacks.length)
            ];

          queue.push(() => {
            enemyMonster.attackMethod({
              attack: randomAttack,
              recipient: myMonster,
            });

            if (myMonster.health <= 0) {
              queue.push(() => {
                myMonster.faint();
              });
              queue.push(() => {
                queue = [];
                endBattleTransition();
              });
            }
            queue.push(() => {
              showBattleMenu();
            });
          });
        } else {
          //enemy attacks first
          const randomAttack =
            enemyMonster.attacks[
              Math.floor(Math.random() * enemyMonster.attacks.length)
            ];

          enemyMonster.attackMethod({
            attack: randomAttack,
            recipient: myMonster,
          });

          if (myMonster.health <= 0) {
            queue.push(() => {
              myMonster.faint();
            });
            queue.push(() => {
              queue = [];
              endBattleTransition();
            });
          }

          queue.push(() => {
            myMonster.attackMethod({
              attack: selectedAttack,
              recipient: enemyMonster,
            });

            //monster dies
            if (enemyMonster.health <= 0) {
              queue.push(() => {
                let expGained = Math.floor(
                  (enemyMonster.level ** 2 * myMonster.level) / 3 + 1
                );
                enemyMonster.faint();
                myMonster.gainExperience(expGained);
                if (myMonster.leveledUp) {
                  document.querySelector("#battleDialogue").innerHTML =
                    myMonster.name + " has leveled up!";
                  document.getElementById("myLvl").innerHTML =
                    "Lv." + myMonster.level;
                  document.querySelector("#MyTotalHealthStat").innerHTML =
                    "/" + myMonster.fullHealth;
                    document.querySelector("#myCurrentHealth").style.width =
                    (myMonster.health / myMonster.fullHealth) * 100 + "%";
                }
              });
              queue.push(() => {
                queue = [];
                endBattleTransition();
              });
            }
            queue.push(() => {
              showBattleMenu();
            });
          });
        }
      });
    });
  }
  showBattleMenu();
}

//battle animation code
function animateBattle() {
  populateCurrentMonsterDetails();
  battleAnimationId = window.requestAnimationFrame(animateBattle);
  battleBackground.draw();
  renderedSprites.forEach((sprite) => {
    sprite.draw();
  });
}

//battle dialogue code
document.querySelector("#battleDialogue").addEventListener("click", (e) => {
  if (queue.length > 0) {
    queue[0]();
    queue.shift();
  } else {
    e.currentTarget.style.display = "none";
  }
});

// Function to handle faint scenario
function handleFaint() {
  game.started = false;
  const gameOverScreen = document.getElementById("gameOverScreen");
  disablePlayerMovement();

  gameOverScreen.style.display = "block";

  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", function () {
    resetMMGame();
    gameOverScreen.style.display = "none";
  });
}
