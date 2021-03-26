
var x = 100;

//key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

function setup()
{
    createCanvas(800,600);
}
function draw() 
{
  background(123,28,38);
  if(keyIsDown(d))
  {
      x+=5;
  }
  if(keyIsDown(a))
  {
      x-=5;
  }
  if(keyIsDown(w))
  {
      y+=5;
  }
  if(keyIsDown(s))
  {
      y-=5;
  }
  circle(x,100,50);
}