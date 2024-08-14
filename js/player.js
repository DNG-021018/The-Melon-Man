game.player = {
  x: 54,
  y: 0,
  height: 30,
  highestY: 0,
  direction: "left",
  isInAir: false,
  // isDoubleJump: false,
  startedJump: false,
  moveInterval: null,
  fallTimeout: function (startingY, time, maxHeight) {
    setTimeout(
      function () {
        if (this.isInAir) {
          this.y = startingY - maxHeight + Math.pow(-time / 3 + 11, 2);
          if (this.y < this.highestY) {
            this.highestY = this.y;
          }
          if (time > 37) {
            this.startedJump = false;
            game.checkCollisions();
          }
          if (time < 150) {
            time++;
            this.fallTimeout(startingY, time, maxHeight);
          } else {
            game.isOver = true;
          }
          if (this.y > 40) {
            game.isOver = true;
          }
          game.requestRedraw();
        }
      }.bind(this, startingY, time, maxHeight),
      12
    );
  },
  animationFrameNumber: 0,
  collidesWithGround: true,
  animations: {
    right: [
      { tileColumn: 0, tileRow: 0 },
      { tileColumn: 1, tileRow: 0 },
      { tileColumn: 2, tileRow: 0 },
      { tileColumn: 3, tileRow: 0 },
      { tileColumn: 4, tileRow: 0 },
      { tileColumn: 5, tileRow: 0 },
      { tileColumn: 6, tileRow: 0 },
      { tileColumn: 7, tileRow: 0 },
    ],
    left: [
      { tileColumn: 0, tileRow: 0 },
      { tileColumn: 1, tileRow: 0 },
      { tileColumn: 2, tileRow: 0 },
      { tileColumn: 3, tileRow: 0 },
      { tileColumn: 4, tileRow: 0 },
      { tileColumn: 5, tileRow: 0 },
      { tileColumn: 6, tileRow: 0 },
      { tileColumn: 7, tileRow: 0 },
    ],
  },
  jump: function (type) {
    if (!this.isInAir) {
      clearInterval(this.fallInterval);
      game.sounds.jump.play();
      this.isInAir = true;
      // this.isDoubleJump = true;
      this.startedJump = true;
      var startingY = this.y;
      var time = 1;
      maxHeight = 121;
      if (type == "fall") {
        time = 30;
        maxHeight = 0;
      }
      this.fallTimeout(startingY, time, maxHeight);
    }
  },
};
