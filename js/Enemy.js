class Enemy {
  constructor() {
    this.frameX = 0;
    this.framY = 0;
    this.fps = 20;
    this.framInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }

  update(deltaTime) {
    //movement
    this.x += this.speedX;
    this.y += this.speedX;
    if (this.frameTimer > this.framInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

  draw() {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.x,
      this,
      y,
      this.width,
      this.height
    );
  }
}

class Fly extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 60;
    this.height = 44;
    this.x = 200;
    this.y = 200;
    this.speedX = 2;
    this.maxFrame = 5;
    this.image = new Image();
    this.image.src = "./enemy_fly.png";
  }

  update(deltaTime) {
    super.update(deltaTime);
  }
}
