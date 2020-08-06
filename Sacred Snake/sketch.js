var snake;
var food;
var rez = 20;
var w,h;

function setup(){
    var canvas = createCanvas(400,400);

    w = floor(width/rez);
    h = floor(height/rez);

    frameRate(5);

    snake=new Snake();

    foodLocation();
}

function foodLocation(){
    var x = floor(random(w));
    var y = floor(random(h));
    food = createVector(x,y);
}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        snake.setDir(-1,0);
    }
    else if (keyCode === RIGHT_ARROW){
        snake.setDir(1,0);
    }
    else if (keyCode === UP_ARROW){
        snake.setDir(0,-1);
    }
    else if (keyCode === DOWN_ARROW){
        snake.setDir(0,1);
    }
}

function draw(){
    scale(rez);
    background("#393e46");

    if (snake.eat(food)){
        foodLocation();
    }
    snake.update();
    snake.show(); 
    keyPressed(); 
    
    if (snake.endGame()){
        print("ENDGAME");
        text("You Lose,Please Refresh",200,200);
        background("#d65a31");
        noLoop();
    }

    noStroke();
    fill("#d65a31");
    rect(food.x,food.y,1,1);   
}





