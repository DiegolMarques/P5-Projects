function setup() {
  createCanvas(600,400)
  circle = {
   x: width/2,
   y: 25,
   diameter: 50,
   speed: random(0,5),
   direction:random(0,5),
  };
}

function draw() {
  background(51)
  noStroke()
  ellipse(circle.x,circle.y,circle.diameter,circle.diameter)
   if (circle.y > height - 25){
    circle.speed = -3;
   }else if(circle.y < 25){
    circle.speed = 3;
   }
    if (circle.x > width - 25){
    circle.direction = -3;
   }else if(circle.x < 25){
    circle.direction = 3;
}
   if (circle.y > height - 25){
    fill(random(0,255),random(0,255),random(0,255))
   }
   if (circle.y < 25){
    fill(random(0,255),random(0,255),random(0,255))
   }
   if (circle.x > width - 25){
    fill(random(0,255),random(0,255),random(0,255))
   }
   if (circle.x < 25){
    fill(random(0,255),random(0,255),random(0,255))
   }

    
   
  circle.y = circle.y + circle.speed;
  circle.x = circle.x + circle.direction;

}