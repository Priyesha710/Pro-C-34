const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;
Constraint = Matter.Constraint,
  Render = Matter.Render;

var userWorld, userEngine;
var gameState, time = 0;
var backgroundImagePath;
var girlImg, boyImg;
var backgroundImage;
var playerHero, createHeroOnce = 0;
var flyingRope;
var obstacleArray = [];

function preload() {
  //preload the images here
  girlImg = loadImage("images/superhero.png");
  boyImg = loadImage("images/Superhero-01.png");
  //monsterAnimation = loadAnimation("images/Monster-01.png","images/Monster-02.png");
  setBackGroundImage();
}

function setup() {
  createCanvas(1200, 500);
  userEngine = Engine.create();
  userWorld = userEngine.world;

  playerHero = new Hero(350, 200);
  gameState = "choose";
  flyingRope = new Rope({ x: 400, y: 70 }, playerHero.body);
  var monster_options = {
  }
  monsterBody = Bodies.circle(100, 100, 30, monster_options);
  for (var i = 0; i < 7; i++) {
    for (var j = 1; j < 8; j++) {
      obstacleArray.push(new Obstacle(400, 25 + (j * 50)));
      console.log(obstacleArray[i].x, obstacleArray[i].y);
    }
  }

  ground = new Ground(600, 400, 1200, 20);
}

function draw() {


  //choosing your character
  if (gameState === "choose") {
    background("cyan");
    if (time === 0) {
      var girlHeroButton = createButton("Super girl");
      girlHeroButton.position(400, 50);
      girlHeroButton.mousePressed(function () {
        playerHero.image = loadImage("images/superhero.png");
        gameState = "play";
        girlHeroButton.hide();
        boyHeroButton.hide();
      })

      var boyHeroButton = createButton("Super boy");
      boyHeroButton.position(800, 50);
      boyHeroButton.mousePressed(function () {
        playerHero.image = loadImage("images/Superhero-01.png");
        gameState = "play";
        boyHeroButton.hide();
        girlHeroButton.hide();
      })
      time = 1;
    }
    image(girlImg, 400, 200, 100, 100);
    image(boyImg, 800, 200, 100, 100);
  }
  if (gameState === "play") {
    if (backgroundImage) {
      background(backgroundImage);
    } else { background("green") };
    playerHero.display();
    ground.display();
    for (var i = 0; i < 7; i++) {
      obstacleArray[i].display();
    }
  }

}

//function defining background image based on time
async function setBackGroundImage() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(response);

  var jsonResponse = await response.json();
  console.log(jsonResponse);

  var dateTime = jsonResponse.datetime;
  console.log(dateTime);

  var hour = dateTime.slice(11, 13);
  console.log(hour);

  if (hour >= 6 && hour <= 18) {
    backgroundImagePath = "images/GamingBackground.png";
  } else {
    backgroundImagePath = "images/GamingBackground.jpg";
  }

  backgroundImage = loadImage(backgroundImagePath);
  // console.log(backgroundImage);
}
function mouseDragged() {
  Matter.Body.setPosition(playerHero.body, { x: mouseX, y: mouseY });
}
