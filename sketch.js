
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800,300 );


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  ground = new Ground(400,250,800,20)

  dustbin1 = new Dustbin(540,190,20,100);
  dustbin2 = new Dustbin(760,190,20,100);
  dustbin3 = new Dustbin(650,230,200,20);

  ball = new Ball(150,190,20,20);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 ball.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-20});
	}
}


