let w, h, food, res = 20, snake;

function setup() {
  createCanvas(400, 400);
  w = floor(width / res);
  h = floor(height / res);
  snake = new Snake();
  foodDraw();
  frameRate(5);
}

function draw() {
  scale(res);
  background(0,255,0);
  
  if(snake.eat(food)) {
    foodDraw();
    // noLoop();
  }
  snake.update();
  snake.show();
  fill(0)
  textSize(1);
  text("pt:" + snake.body.length * 5, w - 4, 1.5);
  if(snake.endGame()) {
    console.log("Game over.");
    // console.log("Your score is " + (snake.len * 5) + " excluding the head." );
    console.log("Your score is " + (snake.body.length * 5) + ".");
    background(255, 0, 0);
    
    noLoop();
  }
  fill(0, 0, 240);
  rect(food.x, food.y, 1, 1);
}

function foodDraw() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    snake.setdir(-1, 0);
  }
  else if(keyCode === RIGHT_ARROW) {
    snake.setdir(1, 0);
  }
   else if(keyCode === UP_ARROW) {
    snake.setdir(0, -1);
  }
   else if(keyCode === DOWN_ARROW) {
    snake.setdir(0, 1);
  }
}



