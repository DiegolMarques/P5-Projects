var min1 = 0;
var max1 = 1000;
var num;
var iNum;
var mY = 100;
var miY = 50;
var y = 100
var x = 100
var array = [max1];
function setup(){

  createCanvas(1310,600);
  num = prompt("input")
  background(51);
}

function draw(){
  finder();
}

function finder(){
 if(int(num) < (min1 + max1)/2){
 max1 = (min1 + max1)/2
  console.log("max1:" + " " + floor(max1))
}
if(int(num) > (min1 + max1)/2){
   min1 = (min1 + max1)/2
     console.log("min1:" + " " + floor(min1))
 }
 noStroke();
 fill(255)
 textSize(32)
 text("Max:", 20, mY)
 text("Min:", 20, miY)
 text("Max:", 20, mY + 100)
 text("Min:",20, miY + 100)
 text(floor(max1),x,y)
 text(floor(min1),x,y - 50)
 x += 200

 if(int(num) == floor(max1) || int(num) == floor(min1)){

   text("Your Input:" + " " + floor(max1),500,300)
   max1 = ''
 }
 if(x > width - 25 && y < 200){
   y += 100;
   x = 100;
 } 


}
