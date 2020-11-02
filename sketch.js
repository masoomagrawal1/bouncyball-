const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine;
var world;
var box,ground,ball;
function setup() {
  engine  = Engine.create() ;  //creates physics engine
  world=engine.world;


  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,option);
  World.add(world,ground);

  var ball_option={
    restitution:1.0
  }

  box=Bodies.rectangle(100,200,50,50,ball_option);
  World.add(world,box);

  ball=Bodies.circle(50,100,20,ball_option);
  World.add(world,ball);

  createCanvas(400,400);
  
}

function draw() {

  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill(255);
  console.log(box.position);
  rect(box.position.x, box.position.y,50,50);

  rect(ground.position.x,ground.position.y,400,20);
  rect(200,200,50,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}