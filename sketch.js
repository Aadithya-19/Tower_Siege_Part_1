const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, slingshot;
var block1;
var polygon, ball;

function preload () {
   polygon = loadImage("octagon_img.png");
}




function setup() {
  var canvas = createCanvas(1600,500);

  engine = Engine.create();
  world = engine.world;

  Ground_1 = new Ground(800, 450, 400, 20);
  Ground_2 = new Ground(1250, 235, 300, 20);

  // Hitter = new hitter(670, 415, 45, 60);
  


  // Level 1 for ground 1
  block1 = new Box(670, 415, 45, 60);
  block2 = new Box(711, 415, 45, 60);
  block3 = new Box(752, 415, 45, 60);
  block4 = new Box(793, 415, 45, 60);
  block5 = new Box(834, 415, 45, 60);
  block6 = new Box(875, 415, 45, 60);
  block7 = new Box(916, 415, 45, 60);

  // Level 2 for ground 1
  block8 = new Box(708, 355, 41, 60);
  block8.shapeColor = color(229, 222, 34);
  block9 = new Box(749, 355, 41, 60);
  block9.shapeColor = color(229, 222, 34);
  block10 = new Box(790, 355, 41, 60);
  block10.shapeColor = color(229, 222, 34);
  block11 = new Box(831, 355, 41, 60);
  block11.shapeColor = color(229, 222, 34);
  block12 = new Box(872, 355, 41, 60);
  block12.shapeColor = color(229, 222, 34);

  // Level 3 for ground 1
  block13 = new Box(747, 295, 41, 60);
  block14 = new Box(788, 295, 41, 60);
  block15 = new Box(829, 295, 41, 60);

  // Level 4 for ground 1
  block16 = new Box(787, 235, 41, 60);
  
  // Level 1 for ground 2
  block17  = new Box(1160, 195, 41, 60);
  block18 = new Box(1201, 195, 41, 60);
  block19 = new Box(1241, 195, 41, 60);
  block20 = new Box(1281, 195, 41, 60);
  block21 = new Box(1321, 195, 41, 60);
  
  // Level 2 for ground 2
  block22 = new Box(1201, 135, 41, 60);
  block23 = new Box(1241, 135, 41, 60);
  block24 = new Box(1281, 135, 41, 60);

  // Level 3 for ground 2

  block25 = new Box(1240, 75, 41, 60);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingshot = new SlingShot(ball, {x : 100, y : 200});

  console.log(slingshot);
}

function draw() {
  background(0); 
  Engine.update(engine); 
 
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

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  
  block22.display();
  block23.display();
  block24.display();
  
  block25.display();

  Ground_1.display();
  Ground_2.display();

  // Hitter.display();
  
  slingshot.display();

  imageMode(CENTER);
  image(polygon,ball.position.x, ball.position.y, 50, 50);

   drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(ball, {x:mouseX, y:mouseY});

}

function mouseReleased(){

  slingshot.fly();

}