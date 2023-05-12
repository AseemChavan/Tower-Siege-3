const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1;
var backgroundImg;
var ball,ballImg;

var slingShot;

function preload(){
  ballImg=loadImage("polygon.png");
  getBackgroundImg();
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;




    ground = new Ground(600, height, 1200, 20);

    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    block16 = new Block(390, 155, 30, 40);
    blocks1 = new Block(640, 175, 30, 40);
    blocks2 = new Block(670, 175, 30, 40);
    blocks3 = new Block(700, 175, 30, 40);
    blocks4 = new Block(730, 175, 30, 40);
    blocks5 = new Block(760, 175, 30, 40);
    blocks6 = new Block(670, 135, 30, 40);
    blocks7 = new Block(700, 135, 30, 40);
    blocks8 = new Block(730, 135, 30, 40);

    ball = Bodies.circle(50,200,20);
    World.add(world, ball);

    slingshot = new SlingShot(ball,{x:100, y:200});
    // platform = new Ground(150, 305, 300, 170);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
    Engine.update(engine);



    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    slingshot.display();

    imageMode(CENTER);
    image(ballImg,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}




function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
 if(keyCode===32){
  slingshot.attach(ball);
 } 
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=11){
      bg = "day .jpg";
  }
  else{
      bg = "night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}