const { CameraRoll } = require("react-native");

var car,wall;
var deformation
var speed,weight;

function preload(){
  redC = loadImage("images/car2.png");
  yellowC = loadImage("images/car3.png");
  greenC = loadImage("images/car1.png");
  blc = loadImage("images/car4.png");
  road = loadImage("images/track.jpg");
}
function setup() {
  createCanvas(1600,400);
  car=createSprite(200, 200, 50, 50);
  car.addImage("running",blc);
  car.addImage("redc",redC);
  car.addImage("greenc",greenC);
  car.addImage("yellowc",yellowC);
  
  

  
  wall=createSprite(1200,200,60,100);
  
   //car.velocityX = 5;
  
  speed=random(25,90);
  weight=random(400,1500);
 }

 
    
  


function draw() {
  background(200);
  imageMode(CENTER)
  image(road,800,200,1600,400)
  car.velocityX=speed;
  camera.position.x = wall.x-500;
  camera.position.y = height/2;
  deformation=0.5* weight* speed* speed/22509;

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
   
    if(deformation>180)
    {
      car.shapeColor=color("yellow");
      wall.shapeColor=color("white");
      car.velocityX=0
      car.changeImage("yellowc");
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color("green");
      wall.shapeColor=color("white");
      car.velocityX=0;
      car.changeImage("greenc");
    }
    if(deformation<100)
    {
      car.shapeColor=color("red");
      wall.shapeColor=color("white");
      car.velocityX=0;
      car.changeImage("redc");
    }
    fill(255);
  text("de"+deformation, 1000, 30 );
  }
  fill(255);
  text("de"+deformation, 1000, 30 );
  drawSprites();
}