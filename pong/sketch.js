var x = 25;
var y = 250;
var x2 = 1315;
var y2 = 250;
var bx = 683;
var by = 353;
var xspeed;
var yspeed;
var angle;
var leftScore = 0;
var rightScore = 0;
var sx2;
var sy2;
var sx;
var sy;
var rx = 599;
var ry = 287;
var rx2 = 600;
var ry2 =  19;
var rOx = 587;
var rOy = 358;
var rEx = 450;
var rEy = 208;
var rBx = 20;
var rBy = 20;
var rMx = 600;
var rMy = 208;
var rHx = 799;
var rHy = 208;
var name1;
var mouseCountExit = 0;
var mouseCountStart = 0;
var mouseCountOptions = 0;
var mouseCountBack = 0;
var mouseCountEasy = 0;
var mouseCountMedium = 0;
var mouseCountHard = 0;
function setup() {
  createCanvas(1360,670);
  reset();
} 

function draw() {
 background(0);
 startMenu();
 countStart();
 countExit();
 countOptions();
 countBack();
 countEasy();
 countMedium();
 scoreSpeed();
 countHard();
 console.log("mouse post", mouseX + " " + mouseY);
 console.log("size x: ", rx, "size y: ", ry );
}

function player1(){
 fill(255)
 rect(x,y,25, height/3)
}

function border(){
 if(y < 0){
  y+=4;
 }
 if(y > height- height/3){
  y-=4;
 }
 if(bx < 0){
  rightScore++
  reset();
 }
 if(bx < x + 55 && by > y && by < y + height/3){
  xspeed = random(sx,sy);
 
}
}

function border2(){
if(y2 < 0){
  y2+=4;
 }
 if(y2 > height- height/3){
  y2-=4;
 }
 if(bx > width){
  leftScore++
  reset();
 }

 if(bx > x2 - 30 && by > y2 && by < y2 + height/3){
  xspeed = random(sx2,sy2);
 }
}

function ball(){
 ellipse(bx,by, 60,60);
 bx -= xspeed;
 by -= yspeed;
}
function walls(){
 if(by < 30){
  yspeed = random(-3,-4);
 } 
 if(by > height - 30){
  yspeed = random(3,4);
 }
 if(bx > width - 30){
  xspeed -= 4;;
}
 if (bx < 30){
  xspeed += 4;
 }
 
}

function player2(){
 fill(255)
 rect(x2,y2,25, height/3)
}

function move2(){
 if(keyIsDown(UP_ARROW)){
  y2-=4;
 }
 if(keyIsDown(DOWN_ARROW)){
  y2+=4;
 }
}
function move(){
 if(keyIsDown(87)){
  y-=4;
 }
 if(keyIsDown(83)){
  y+=4;
 }
}

function score(){
  textSize(32);
  text(leftScore, 64, 60)
  text(rightScore, width - 64 , 60)
}

function reset(){
  bx = width/2
  by = height/2
  angle = random(-PI/4, PI/4);
  xspeed = 5 * cos(angle);
  yspeed = 5 * sin(angle);
}
function scoreSpeed(){
if(mouseCountEasy >= 1){
  sx2 = 5;
  sy2 = 6;
  sx = -5;
  sy = -6;
}
  if(mouseCountMedium >= 1){
  sx2 = 12;
  sy2 = 13;
  sx = -12;
  sy = -13;
  }
  if(mouseCountStart >= 1){
  sx2 = 5;
  sy2 = 6;
  sx = -5;
  sy = -6;
  }
  if(mouseCountHard >= 1){
  sx2 = 18;
  sy2 = 19;
  sx = -18;
  sy = -19;
  }
}

function startMenu(){
  noFill();
  stroke(255);
  strokeWeight(4);
  rect(rx,ry, 100,50)
  rect(rOx,rOy,125,50)
  fill(255);
  noStroke();
  textSize(64);
  text("PONG", width/2 - 125, height/3);
  textSize(32);
  text("Start", width/2 - 65, height/3 + 100);
  text("Options", width/2 - 85, height/3 + 170);
  if(name1){
    var name1 = prompt("hi")
  }
  if(mouseCountStart >= 1){
    if(name1 != ""){
   background(0);
  scoreSpeed();
 border();
 border2();
 walls();
 move();
 move2();
 player1();
 player2();
 score();
 ball();
 exitButton();
}
  }
  if(mouseCountOptions >= 1){
   background(0);
   noFill();
   stroke(255);
   strokeWeight(4);
   rect(rEx,rEy,90,50)
   rect(rBx,rBy,100,50)
   rect(rMx,rMy,130,50)
   rect(rHx,rHy, 90,50)
   fill(255);
   noStroke();
   textSize(64);
   text("DIFFICULTY",width/2 - 185, height/3 - 100)
   textSize(32);
   text("Easy",width/2 - 221 ,height/3 + 20)
   text("Back", 35,55)
   text("Medium", width/2 - 71 ,height/3 + 20)
   text("Hard", width - 550, height/3 + 20)
   mouseCountStart = 0;

  }
  if(mouseCountBack >= 1){
     background(0);
     mouseCountOptions = 0;
     mouseCountExit = 0;
     mouseCountStart = 0;
     mouseCountBack = 0;
     startMenu();
     mouseCountEasy = 0;
     mouseCountMedium = 0;
     mouseCountOptions = 0;
     mouseCountHard= 0;
  }
  if(mouseCountEasy >= 1){
    background(0);
    border();
    border2();
    walls();
    move();
    move2();
    player1();
    player2();
    score();
    scoreSpeed();
    ball();
    exitButton();
  }
  if(mouseCountMedium >= 1){
    background(0);
    border();
    border2();
    walls();
    move();
    move2();
    player1();
    player2();
    score();
    scoreSpeed();
    ball();
    exitButton();
  } 
  if(mouseCountHard >= 1){
    background(0);
    border();
    border2();
    walls();
    move();
    move2();
    player1();
    player2();
    score();
    scoreSpeed();
    ball();
    exitButton();
  }
} 

function countStart(){
   if((mouseX > rx && mouseX < rx + 100 && mouseY > ry && mouseY < ry + 50)){
    if(mouseIsPressed){
          mouseCountStart++
}
}
}
function countExit(){
  if(mouseX > rx2 && mouseX < rx2 + 100 && mouseY > ry2 && mouseY < ry2 + 50){
    if(mouseIsPressed){
      mouseCountExit++
    }
  }
}
function countOptions(){
  if(mouseX > rOx && mouseX < rOx + 125 && mouseY > rOy && mouseY < rOy + 50){
    if(mouseIsPressed){
      mouseCountOptions++
    }
  }
}
function countBack(){
  if(mouseX > rBx && mouseX < rBx + 100 && mouseY > rBy && mouseY < rBy + 50){
    if(mouseIsPressed){
      mouseCountBack++
    }
  }
}
function countEasy(){
  if(mouseX > rEx && mouseX < rEx + 100 && mouseY > rEy && mouseY < rEy + 50){
    if(mouseIsPressed){
      mouseCountEasy++
    }
  }
}
function countMedium(){
  if(mouseX > rMx && mouseX < rMx + 130 && mouseY > rMy && mouseY < rMy + 50){
    if(mouseIsPressed){
      mouseCountMedium++ 

    }
    
  }
}
function countHard(){
  if(mouseX > rHx && mouseX < rHx + 90 && mouseY > rHy && mouseY < rHy + 50){
    if(mouseIsPressed){
      mouseCountHard++ 

    }
}
}

function exitButton(){
noFill();
  stroke(255);
  strokeWeight(4);
  rect(rx2,ry2, 100,50);
  fill(255);
  noStroke();
  textSize(32);
  text("EXIT", width/2 - 65, 25,100,50);
  if(mouseCountExit >= 1){
    mouseCountStart = 0;
    mouseCountEasy = 0;
    mouseCountOptions = 0;
    mouseCountExit = 0;
    mouseCountMedium = 0;
    mouseCountHard = 0;
    leftScore = 0;
    rightScore = 0;
    reset();  
    startMenu();
  }
}







