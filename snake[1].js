class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;

  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(255, 0, 0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }

  setdir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();

    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);

  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);

  }

  eat(pos) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;

    if (x == pos.x && y == pos.y) {
      snake.grow();
      return true;
    }
  }
  endGame() {
    // console.log("check 1");
    let headX = this.body[this.body.length - 1].x;
    let headY = this.body[this.body.length - 1].y;

    if (headX < 0 || headX > w - 1 || headY < 0 || headY > h) {
      return true;
    }
  // if(snake.eat(pos) == true) {
  //   console.log("eat");
  // }
        var ex = "Siddharth";
        if (ex == "Siddharth") {
         // console.log("check 2");
          for (let i = 0; i < this.body.length - 1; i++) {
           //  console.log("check 3");
            if (this.body.length == 1) {
           // console.log("1");
            } else if (this.body.length > 1) {
             
              let bodyX = this.body[i].x;
              let bodyY = this.body[i].y;
              if (headX == bodyX && headY == bodyY) {
               // console.log("check 4");
                return true;
              }
      }
      }
    }
  }
}