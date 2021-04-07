//My Little minion
var characterX = 100;
var characterY = 100;

//Movement
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//Array Evil Minion replacements
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeed = [];
var shapeYSpeed = [];

//Mouse click
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(200, 350);
}

function draw() 
{
    background('blue');
    stroke(0);
    fill(0);
    
    createBorders(10);

    //Exit
    textSize(18);
    stroke('red');
    fill('red');
    text("EXIT", width-55, height-53);

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();

    //Array replacement
    fill(13, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) 
    {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);



        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) 
        {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) 
        {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) 
        {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) 
        {
            shapeYs[i] = height;
        }
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
    circle(mouseShapeX, mouseShapeY, 45);
}

function characterMovement() 
{
    // handle the keys
    if (keyIsDown(w)) 
    {
        characterY -= 10;
    }
    if (keyIsDown(s)) 
    {
        characterY += 10;
    }
    if (keyIsDown(a)) 
    {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) 
    {
        characterX += 10;
    }
}



function createCharacter(x, y) 
{
    characterX = x;
    characterY = y;
}

function drawCharacter() 
{
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) 
{
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() 
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) 
{
    return Math.floor(Math.random() * number) + 10;
}