//My Little minion
var characterX = 100;
var characterY = 100;

//Movement
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//Evil minion 1
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//Evil minion 2
var shapeX2 = 450;
var shapeY2 = 300;
var shapeX2speed;
var shapeY2speed;

//Mouse click
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
}

function draw()
{
    background('blue');
    stroke(0);
    fill(0);
    //Top border
    rect(0,0,width,10);
    //Left border
    rect(0,0,10,height);
    //Bottom border
    rect(0, height-10,width, 10);
    //Right upper border
    rect(width-10,0,10,height-50);

    //Exit
    textSize(18);
    stroke('red');
    fill('red');
    text("EXIT", width-55,height-53)

    //Little Minion
    fill('pink');
    stroke('pink');
    circle(characterX,characterY,35);

    //Little minion's movement
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    //Evil Minion
    fill('green');
    stroke(0);
    circle(shapeX, shapeY, 20);
    fill('yellow');
    circle(shapeX2, shapeY2, 50);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 6);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //Evil minoin's movement
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    //If Evil minion leaves
    if(shapeX > width)
    {
        shapeX = 0;
    }
    else if(shapeX < 0)
    {
        shapeX = width;
    }
    else if(shapeY > height)
    {
        shapeY = 0;
    }
    else if(shapeY < 0)
    {
        shapeY = height;
    }

     // get a random speed when the it first starts
     shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //Evil minoin2's movement
    shapeX2 += shapeX2Speed;
    shapeY2 += shapeY2Speed;
    //If Evil minion2 leaves
    if(shapeX2 > width)
    {
        shapeX2 = 1;
    }
    if(shapeX2 < 1)
    {
        shapeX2 = width;
    }
    if(shapeY2 > height)
    {
        shapeY2 = 1;
    }
    if(shapeY2 < 1)
    {
        shapeY2 = height;
    }

    //Win message
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(32);
        text("You Win!", width/2-50, height/2-50);
    }


    //Mouse minoin
    fill(0);
    stroke(0);
    circle(mouseShapeX, mouseShapeY, 25);
    
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;

}

