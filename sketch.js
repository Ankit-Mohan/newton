
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5,ground1,rope1;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(200,200,25);
	ball2 = new Ball(250,200,25);
	ball3 = new Ball(300,200,25);
	ball4 = new Ball(350,200,25);
	ball5 = new Ball(400,200,25);
	ground1 = new Ground(600,100,400,25);
	rope1 = new Rope(ball1.body,ground1.body,100);
	rope2 = new Rope(ball2.body,ground1.body,50);
	rope3 = new Rope(ball3.body,ground1.body,0);
	rope4 = new Rope(ball4.body,ground1.body,-50);
	rope5 = new Rope(ball5.body,ground1.body,-100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("blue");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	{
		console.log("inside keyPressed");
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-0.05,y:-0.05})
		
	}
}


