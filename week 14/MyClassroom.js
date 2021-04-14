//My Little minion
var characterX = 100;
var characterY = 100;

//Movement
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//Array Evil Minion1 replacements
var shapeXSpeeds = [];
var shapeYSpeeds = [];

var shapeXs = [];
var shapeYs = [];
var diameters = [];

//Array Evil Minion2 replacements
var shapeX2Speeds = [];
var shapeY2Speeds = [];

var shapeX2s = [];
var shapeY2s = [];
var diameter2s = [];

//Array Evil Minion3 replacements
var shapeX3Speeds = [];
var shapeY3Speeds = [];

var shapeX3s = [];
var shapeY3s = [];
var diameter3s = [];

//Array Evil Minion4 replacements
var shapeX4Speeds = [];
var shapeY4Speeds = [];

var shapeX4s = [];
var shapeY4s = [];
var diameter4s = [];

//Array Evil Minion5 replacements
var shapeX5Speeds = [];
var shapeY5Speeds = [];

var shapeX5s = [];
var shapeY5s = [];
var diameter5s = [];

//Mouse click
var mouseShapeX;
var mouseShapeY;

//Classroom

var rectangleObject;
var rectangle2Object;
var rectangle3Object;
var rectangle4Object;

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

    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeX2Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeY2Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeX2s[i] = getRandomNumber(500);
        shapeY2s[i] = getRandomNumber(600);
        diameter2s[i] = getRandomNumber(30);
    }

    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeX3Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeY3Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeX3s[i] = getRandomNumber(500);
        shapeY3s[i] = getRandomNumber(600);
        diameter3s[i] = getRandomNumber(30);
    }

    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeX4Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeY4Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeX4s[i] = getRandomNumber(500);
        shapeY4s[i] = getRandomNumber(600);
        diameter4s[i] = getRandomNumber(30);
    }

    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeX5Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeY5Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeX5s[i] = getRandomNumber(500);
        shapeY5s[i] = getRandomNumber(600);
        diameter5s[i] = getRandomNumber(30);
    }

    createCharacter(200, 350);

    rectangleObject = new Rectangle(30,30,90,30,120,35,210);
    rectangle2Object = new Rectangle(380,20,100,50,190,80,67);
    rectangle3Object = new Rectangle(30,530,85,45,25,120,150);
    rectangle4Object = new Rectangle(435,555,60,30,140,150,37);
}

function draw() 
{
    background('blue');
    stroke(0);
    fill(0);
    
    createBorders(10);

    rectangleObject.display();
    rectangle2Object.display();
    rectangle3Object.display();
    rectangle4Object.display();

    //Exit
    textSize(18);
    stroke('red');
    fill('red');
    text("EXIT", width-55, height-53);

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();

    //Array replacement
    stroke(0);
    fill('green');
    // draw the shape
    for (var i = 0; i < 15; i++) 
    {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);

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

    //Array replacement
    stroke(0);
    fill('red');
    // draw the shape
    for (var i = 0; i < 20; i++) 
    {
        circle(shapeX2s[i], shapeY2s[i], diameter2s[i]);
        shapeX2Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
        shapeY2Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the shape
        shapeX2s[i] += shapeX2Speeds[i];
        shapeY2s[i] += shapeY2Speeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeX2s[i] > width) 
        {
            shapeX2s[i] = 0;
        }
        if (shapeX2s[i] < 0) 
        {
            shapeX2s[i] = width;
        }
        if (shapeY2s[i] > height) 
        {
            shapeY2s[i] = 0;
        }
        if (shapeY2s[i] < 0) 
        {
            shapeY2s[i] = height;
        }
    }

    //Array replacement
    stroke(0);
    fill('yellow');
    // draw the shape
    for (var i = 0; i < 30; i++) 
    {
        circle(shapeX3s[i], shapeY3s[i], diameter3s[i]);
        shapeX3Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeY3Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);

        // move the shape
        shapeX3s[i] += shapeX3Speeds[i];
        shapeY3s[i] += shapeY3Speeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeX3s[i] > width) 
        {
            shapeX3s[i] = 0;
        }
        if (shapeX3s[i] < 0) 
        {
            shapeX3s[i] = width;
        }
        if (shapeY3s[i] > height) 
        {
            shapeY3s[i] = 0;
        }
        if (shapeY3s[i] < 0) 
        {
            shapeY3s[i] = height;
        }
    }

    //Array replacement
    stroke(0);
    fill('orange');
    // draw the shape
    for (var i = 0; i < 10; i++) 
    {
        circle(shapeX4s[i], shapeY4s[i], diameter4s[i]);
        shapeX4Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
        shapeY4Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the shape
        shapeX4s[i] += shapeX4Speeds[i];
        shapeY4s[i] += shapeY4Speeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeX4s[i] > width) 
        {
            shapeX4s[i] = 0;
        }
        if (shapeX4s[i] < 0) 
        {
            shapeX4s[i] = width;
        }
        if (shapeY4s[i] > height) 
        {
            shapeY4s[i] = 0;
        }
        if (shapeY4s[i] < 0) 
        {
            shapeY4s[i] = height;
        }
    }

    //Array replacement
    stroke(0);
    fill('purple');
    // draw the shape
    for (var i = 0; i < 5; i++) 
    {
        circle(shapeX5s[i], shapeY5s[i], diameter5s[i]);
        shapeX5Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeY5Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);

        // move the shape
        shapeX5s[i] += shapeX5Speeds[i];
        shapeY5s[i] += shapeY5Speeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeX5s[i] > width) 
        {
            shapeX5s[i] = 0;
        }
        if (shapeX5s[i] < 0) 
        {
            shapeX5s[i] = width;
        }
        if (shapeY5s[i] > height) 
        {
            shapeY5s[i] = 0;
        }
        if (shapeY5s[i] < 0) 
        {
            shapeY5s[i] = height;
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
    circle(mouseShapeX, mouseShapeY, 35);
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
    stroke(0);
    fill('pink');
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