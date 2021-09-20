
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0.95,
		
	  }

    ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  ground =new Ground(400,690,800,20);
  rect1=new Ground(600,680,20,150);
  rect2=new Ground(700,680,20,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  rect1.show();
  rect2.show();
 ellipse(ball.position.x,ball.position.y,20);
}

function keyPressed(){
if (keyCode === UP_ARROW) {
	vForce();
}



}
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
}

