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
    attacks,
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
    (this.isEnemy = isEnemy),
      (this.name = name),
      (this.health = 100),
      (this.attacks = attacks);
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

  attack({ attack, recipient, renderedSprites }) {
    document.querySelector("#battleDialogue").style.display = "block";
    document.querySelector("#battleDialogue").innerHTML =
      this.name + " used " + attack.name;

    let healthBar = "#enemyCurrentHealth";
    if (this.isEnemy) {
      healthBar = "#myCurrentHealth";
    }
    recipient.health -= attack.damage;

    const tl = gsap.timeline();

    let movementDistance = 20;
    if (this.isEnemy) {
      movementDistance = -20;
    }

    tl.to(this.position, {
      x: this.position.x - movementDistance,
    })
      .to(this.position, {
        x: this.position.x + movementDistance * 2,
        duration: 0.1,
        onComplete: () => {
          //Enemy gets hit
          gsap.to(healthBar, {
            width: recipient.health + "%",
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
        },
      })
      .to(this.position, {
        x: this.position.x,
      });
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
