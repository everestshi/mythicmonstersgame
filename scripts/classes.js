"use strict";

//Boundary Class Creation
class Boundary {
  static width = 64;
  static height = 64;
  constructor({ position }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }

  draw() {
    context.fillStyle = "rgba(255, 0, 0, 0.5)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//Sprite Class Creation
class Sprite {
  constructor({
    position,
    image,
    srcX,
    srcY,
    srcWidth,
    srcHeight,
    width,
    height,
  }) {
    this.position = position;
    this.image = image;
    this.srcX = srcX || 0;
    this.srcY = srcY || 0;
    this.srcWidth = srcWidth || image.width;
    this.srcHeight = srcHeight || image.height;
    this.width = width || this.srcWidth;
    this.height = height || this.srcHeight;
    this.moving = false;
    this.opacity = 1;
  }

  draw() {
    context.save();
    context.globalAlpha = this.opacity;
    context.drawImage(
      this.image,
      this.srcX,
      this.srcY,
      this.srcWidth,
      this.srcHeight,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    context.restore();
  }
}

class Player extends Sprite {
  constructor({
    position,
    image,
    srcX,
    srcY,
    srcWidth,
    srcHeight,
    width,
    height,
  }) {
    super({
      position,
      image,
      srcX,
      srcY,
      srcWidth,
      srcHeight,
      width,
      height,
    });
    this.party = []; // An empty array to store the player's monsters
  }

  addToParty(monster) {
    if (this.party.length < 6) {
      this.party.push(monster);
    }
  }

  removeFromParty(monsterName) {
    if (this.party.length > 1) {
      this.party = this.party.filter((monster) => monster.name !== monsterName);
    }
  }
}

class Monster extends Sprite {
  constructor({
    position,
    image,
    srcX,
    srcY,
    srcWidth,
    srcHeight,
    width,
    height,
    isEnemy = false,
    name,
    level,
    attacks,
    baseHealth,
    baseAttack,
    baseDefense,
    baseSpeed,
    //experience,
  }) {
    super({
      position,
      image,
      srcX,
      srcY,
      srcWidth,
      srcHeight,
      width,
      height,
    });
    this.level = level;
    this.baseHealth = baseHealth;
    this.fullHealth = Math.floor(((2 * this.baseHealth) * this.level) / 100 + this.level + 10);
    this.baseAttack = baseAttack;
    this.baseDefense = baseDefense;
    this.baseSpeed = baseSpeed;

    this.health = this.fullHealth;
    //this.attack = Math.floor(((2 * this.baseAttack) * this.level) / 100 + 5);
    //this.defense = Math.floor(((2 * this.baseDefense) * this.level) / 100 + 5);
    this.speed = Math.floor((2 * this.baseSpeed * this.level) / 100 + 5);

    //this.experience = experience;
    this.isEnemy = isEnemy;
    this.name = name;
    this.attacks = attacks;

    if (this.isEnemy) {
      // Set the position for enemies
      this.position = {
        x: 665,
        y: 140,
      };
    } else {
      this.position = {
        x: 235,
        y: 315,
      };
    }
  }

  animateNumberChange(element, newValue) {
    const currentValue = parseInt(element.textContent);
    const difference = Math.abs(newValue - currentValue);
    const direction = currentValue < newValue ? 1 : -1;
    const duration = 500; // Adjust this value for speed
    console.log('New Value:', newValue);
  console.log('Current Value:', currentValue);
  console.log('Difference:', difference);

    let i = currentValue;
    const interval = setInterval(() => {
      if (i === newValue) {
        clearInterval(interval);
        return;
      }
      i += direction;
      element.textContent = i;
    }, duration / difference);
  }

  attack({ attack, recipient }) {
    document.querySelector("#battleDialogue").style.display = "block";
    document.querySelector("#battleDialogue").innerHTML =
      this.name + " used " + attack.name;

    let healthBar = this.isEnemy ? "#myCurrentHealth" : "#enemyCurrentHealth";
    const healthStat = "myHealthStat";
    const initialHealth = recipient.health;

    // Calculate attack and defense here
    const attackerAttackStat = Math.floor(((2 * this.baseAttack) * this.level) / 100 + 5);
    const defenderDefenseStat = Math.floor(((2 * recipient.baseDefense) * recipient.level) / 100 + 5);
    const movePower = attack.damage;
    //console.log('Attacker Attack Stat:', attackerAttackStat);
    //console.log('Defender Defense Stat:', defenderDefenseStat);
    //console.log('Move Power:', movePower);

    const damage = Math.floor((((2 * this.level / 5 + 2) * attackerAttackStat * movePower / defenderDefenseStat) / 50) + 2);
    console.log(damage);

    recipient.health -= damage;
    const newHealth = Math.max(initialHealth - damage, 0)

    const tl = gsap.timeline();

    let movementDistance = this.isEnemy ? -20 : 20;

    tl.to(this.position, {
      x: this.position.x - movementDistance,
    })
      .to(this.position, {
        x: this.position.x + movementDistance * 2,
        duration: 0.1,
        onComplete: () => {
          const healthPercentage = (recipient.health / recipient.fullHealth) * 100;
          gsap.to(healthBar, {
            width: healthPercentage + "%",
          });

          gsap.to(recipient.position, {
            x: recipient.position.x + 10,
            yoyo: true,
            repeat: 5,
            duration: 0.08,
          });

          gsap.to(recipient, {
            opacity: 0,
            repeat: 5,
            yoyo: true,
            duration: 0.08,
          });
        // Check if enemy is attacking the player
        if (this.isEnemy) {
          // Animate the number change
          this.animateNumberChange(document.querySelector("#" + healthStat), newHealth);
        }
        },
      })
      .to(this.position, {
        x: this.position.x,
      });
  }

  heal() {
    const healedAmount = this.fullHealth - this.health; // Amount to increase the health
    const healthStat = "myHealthStat"; // Replace with your health stats element id
    const initialHealth = this.health;
    this.health = this.fullHealth;
  
    document.querySelector("#battleDialogue").style.display = "block";
    document.querySelector("#battleDialogue").innerHTML =
      this.name + " has been healed!";
    let healthBar = "#myCurrentHealth";
  
    const healthPercentage = (this.health / this.fullHealth) * 100;

    gsap.to(healthBar, {
      width: healthPercentage + "%",
    });
  
    // Animate the number change for healed amount
    this.animateNumberChange(document.querySelector("#" + healthStat), initialHealth + healedAmount);
  }
  

  faint() {
    document.querySelector("#battleDialogue").innerHTML =
      this.name + " has fainted!";
    gsap.to(this.position, {
      y: this.position.y + 20,
    });
    gsap.to(this, {
      opacity: 0,
    });
  }
}

/*

class Monster extends Sprite {
  constructor({
    position,
    image,
    srcX,
    srcY,
    srcWidth,
    srcHeight,
    width,
    height,
    isEnemy = false,
    name,
    attacks,
    //baseHealth,
    //baseAttack,
    //baseDefense,
    //baseSpeed,
    //level = 5, // Default level set to 5
    //currentExperience = 0, // Default current experience set to 0
  }) {
    super({
      position,
      image,
      srcX,
      srcY,
      srcWidth,
      srcHeight,
      width,
      height,
    });
    this.isEnemy = isEnemy,
    this.name = name,

    // Set base stats
    //this.baseHealth = baseHealth;
    //this.baseAttack = baseAttack;
    //this.baseDefense = baseDefense;
    //this.baseSpeed = baseSpeed;

    // Set stats based on level and base stats
    //this.level = level;
    //this.health = Math.floor(((2 * this.baseHealth) * this.level) / 100 + this.level + 10);
    //this.attack = Math.floor(((2 * this.baseAttack) * this.level) / 100 + 5);
    //this.defense = Math.floor(((2 * this.baseDefense) * this.level) / 100 + 5);
    //this.speed = Math.floor(((2 * this.baseSpeed) * this.level) / 100 + 5);

    // Set experience
    //this.currentExperience = currentExperience;
    //this.experienceToNextLevel = this.calculateExperienceForNextLevel();

    this.health = 100,
    this.attacks = attacks;
    if (this.isEnemy) {
      // Set the position for enemies
      this.position = {
        x: 665,
        y: 140,
      };
    } else {
      this.position = {
        x: 235,
        y: 315,
      };
    }
  }

  // Function to calculate experience required for the next level
  calculateExperienceForNextLevel() {
    return Math.floor(this.level ** 3); // Example formula; adjust based on your game mechanics
  }

  // Function to gain experience
  gainExperience(amount) {
    this.currentExperience += amount;

    // Check if enough experience is gained to level up
    if (this.currentExperience >= this.experienceToNextLevel) {
      this.levelUp();
    }
  }

  // Function to handle level up
  levelUp() {
    this.level++;
    // Recalculate stats and experience for the new level
    this.health = Math.floor(((2 * this.baseHealth) * this.level) / 100 + this.level + 10);
    this.attack = Math.floor(((2 * this.baseAttack) * this.level) / 100 + 5);
    this.defense = Math.floor(((2 * this.baseDefense) * this.level) / 100 + 5);
    this.speed = Math.floor(((2 * this.baseSpeed) * this.level) / 100 + 5);

    this.currentExperience -= this.experienceToNextLevel;
    this.experienceToNextLevel = this.calculateExperienceForNextLevel();
  }
*/