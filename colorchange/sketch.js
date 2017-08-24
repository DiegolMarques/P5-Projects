var x = 300;
var y = 200;
var diameter = 50;
var both = x+y;
function setup() {
  createCanvas(600,400);
 

 
}

function draw() {
  col3 = map(x,0,600,255,0)
  col = map(x,0,600,0,255)
  col2 = map(y,0,400,255,0)
  background(col3,col,col2)
  fill(0,200,20)
   boarders()
   move()
   ellipse(x,y,diameter,diameter)
   
}


function boarders(){
 if(x > width-25){
    x-=5;
   }
   if(x === 25){
    x+=5;
   }
   if(y > height-25){
    y-=5;
   }
   if(y === 25){
    y+=5;
   }
}
function move(){
 if(keyIsDown(RIGHT_ARROW)){
    x +=5;
      }
      
    if(keyIsDown(LEFT_ARROW)){
    x -=5;
    }
    
    if(keyIsDown(UP_ARROW)){
    y -=5;
    }
    
    if(keyIsDown(DOWN_ARROW)){
     y +=5;
    }
    
}


