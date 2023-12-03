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

function initBattle(enemyMonster, myMonster) {
  renderedSprites = [enemyMonster, myMonster];
  queue = [];

  const healthPercentage = (myMonster.health / myMonster.fullHealth) * 100;

  document.querySelector("#userInterface").style.display = "block";
  document.querySelector("#battleDialogue").style.display = "none";
  document.querySelector("#enemyCurrentHealth").style.width = "100%";
  document.querySelector("#myCurrentHealth").style.width = healthPercentage + "%";
  document.querySelector("#enemyName").innerHTML = enemyMonster.name;
  document.querySelector("#enemyLvl").innerHTML = "Lv." + enemyMonster.level;
  document.querySelector("#myName").innerHTML = myMonster.name;
  document.querySelector("#myLvl").innerHTML = "Lv." + myMonster.level;
  document.querySelector("#myHealthStat").innerHTML = myMonster.health;
  document.querySelector("#MyTotalHealthStat").innerHTML = "/" + myMonster.fullHealth;
  document.querySelector("#attacks").replaceChildren();
  
  function clearEventListeners() {
    queue = [];
    document.querySelector("#battleDialogue").style.display = "none";
    const buttonsContainer = document.querySelector("#attacks");
    buttonsContainer.innerHTML = ''; // Clear the current buttons
  
    // Call a function to populate attacks for my monster
    myMonster.attacks.forEach((attack) => {
      const button = document.createElement("button");
      button.innerHTML = attack.name;
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
        document.querySelector("#userInterface").style.display =
          "none";
        gsap.to("#battleTransition", {
          opacity: 0,
        });
        if (trainer1Monster.health <= 0){
          trainer1.isDefeated = true;
          updateTrainer1Dialogue();
        }
        if (trainer2Monster.health <= 0){
          trainer2.isDefeated = true;
          updateTrainer2Dialogue();
        }
        if (trainer3Monster.health <= 0){
          trainer3.isDefeated = true;
          updateTrainer3Dialogue();
        }
        if (trainer1.isDefeated && trainer2.isDefeated && trainer3.isDefeated){
          updateLeaderDialogue();
        }
        if (leaderMonster.health <= 0){
          game.beatenLeader = true;
          updateLeaderDialogue();
          updateProfessorDialogue();
        }
        if (player.party[0].health <= 0){
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

    const healButton = document.querySelector("#healOption");
    healButton.addEventListener("click", () => {
      document.querySelector("#battleMenu").style.display = "none";
      myMonster.heal();

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

  const runButton = document.querySelector("#runOption");
  clearEventListeners();
  runButton.addEventListener("click", () => {
    document.querySelector("#battleMenu").style.display = "none";

    if (myMonster.speed > enemyMonster.speed){
      document.querySelector("#battleDialogue").style.display = "block";
      document.querySelector("#battleDialogue").innerHTML = "Ran away safely!";

      queue.push(() => {
        endBattleTransition();
      });

    } else {
      const chance = Math.random();
      if (chance < 0.5) {
        document.querySelector("#battleDialogue").style.display = "block";
        document.querySelector("#battleDialogue").innerHTML = "Ran away safely!";
        queue = [];
        queue.push(() => {
          endBattleTransition();
        });
      } else {
        document.querySelector("#battleDialogue").style.display = "block";
        document.querySelector("#battleDialogue").innerHTML = "Unable to run away!";
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


  function attachAttackListeners() {
    const attackButtons = document.querySelectorAll("button");
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
        //my attack
        myMonster.attackMethod({
          attack: selectedAttack,
          recipient: enemyMonster,
        });

        //monster dies
        if (enemyMonster.health <= 0) {
          queue.push(() => {
            let expGained = Math.floor((enemyMonster.level ** 2) * myMonster.level / 7 + 1);
            myMonster.gainExperience(expGained);
            enemyMonster.faint();
          });
          queue.push(() => {
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
              endBattleTransition();
            });
          }
          queue.push(() => {
            showBattleMenu();
          });
        });
      });
    });
  }

  showBattleMenu();
}

function animateBattle() {
  battleAnimationId = window.requestAnimationFrame(animateBattle);
  battleBackground.draw();
  renderedSprites.forEach((sprite) => {
    sprite.draw();
  });
}

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
  const gameScreen = document.getElementById("gameScreen");
  const gameOverScreen = document.getElementById("gameOverScreen");

  // Hide game screen and show game over screen
  gameOverScreen.style.display = "block"
  //gameScreen.style.display = "none";

  // Restart button click event
  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", function () {
    // Reset the game
    resetMMGame();

    // Show the game screen and hide game over screen
    //gameScreen.style.display = "inline-block";
    gameOverScreen.style.display = "none";
  });
}