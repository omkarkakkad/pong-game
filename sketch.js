var playerPaddle,computerPaddle;

var leftEdge,rightEdge,topEdge,bottomEdge;

var middleLine;

var ball,ball_Image;

var hit_Sound,player_Sound,score_Sound,die_Sound;

var score = 0;
var score2 = 0;

function preload(){
  ball_Image = loadImage("ball.png");
  hit_Sound = loadSound("hit_Sound.mp3");
  player_Sound = loadSound("player_Sound.mp3");
  score_Sound = loadSound("score_Sound.mp3");
  die_Sound = loadSound("die_Sound.mp3");

}

function setup(){
  createCanvas(650,500);

  playerPaddle = createSprite(610,250,20,100);
  playerPaddle.shapeColor = "white";

  computerPaddle = createSprite(30,250,20,100);
  computerPaddle.shapeColor = "white";

  leftEdge = createSprite(2,250,3,500);
  leftEdge.shapeColor = "white";
  leftEdge.visible = false;

  rightEdge = createSprite(648,250,3,500);
  rightEdge.shapeColor = "white";
  rightEdge.visible = false;

  topEdge = createSprite(325,2,650,3);
  topEdge.shapeColor = "white";
  topEdge.visible = false;

  bottomEdge = createSprite(325,498,650,3);
  bottomEdge.shapeColor = "white";
  bottomEdge.visible = false;

  middleLine = createSprite(325,250,5,500);
  middleLine.shapeColor = "white";

  ball = createSprite(325,250,10,10);
  ball.addImage("circle",ball_Image);
  ball.scale = 0.4;

  ball.velocityX = -10;
  ball.velocityY = +7;

  score = 0;
  score2 = 0;

}


function draw(){
  background("black");

    fill("white");
    stroke("black");
    strokeWeight(5);
    textSize(55);
    text(""+ score, 350,60);
  
    fill("white");
    stroke("black");
    strokeWeight(5);
    textSize(55);
    text(""+ score2, 265,60);
  
  if(keyDown("up_arrow")){
    playerPaddle.y = playerPaddle.y-15;
 
  }

  if(keyDown("down_arrow")){
    playerPaddle.y = playerPaddle.y+15;
  }

  computerPaddle.y = ball.y;

  
  playerPaddle.collide(topEdge);
  playerPaddle.collide(bottomEdge);

 if(ball.isTouching(playerPaddle)){
   ball.bounceOff(playerPaddle);
   hit_Sound.play();
 }

 if(ball.isTouching(computerPaddle)){
   ball.bounceOff(computerPaddle);
   hit_Sound.play();
 }

 if(ball.isTouching(topEdge)){
   ball.bounceOff(topEdge);
   player_Sound.play();
 }

 if(ball.isTouching(bottomEdge)){
  ball.bounceOff(bottomEdge);
  player_Sound.play();
}

if(ball.isTouching(leftEdge)){
  die_Sound.play();
  ball.x = 325;
  ball.y = 250;
  ball.velocityX = -10;
  ball.velocityY = +7;

  score = score + 1;
}

if(ball.isTouching(rightEdge)){
  die_Sound.play();
  ball.x = 325;
  ball.y = 250;
  ball.velocityX = -10;
  ball.velocityY = +7;

  score2 = score2 + 1;
}

if(score2 === 4){
  ball.x = 325;
  ball.y = 250;

  ball.velocityX = 0;
  ball.velocityY = 0; 

  playerPaddle.x = 610;
  playerPaddle.y = 250;

  computerPaddle.x = 30;
  computerPaddle.y = 250;

  strokeWeight(8);
  stroke("black");
  textSize(45);
  fill("white");
  text("YOU LOSE",200,200);

  strokeWeight(8);
  stroke("black");
  textSize(45);
  fill("white");
  text("press F5 to play again",100,350);
  
}

  drawSprites();


  
}