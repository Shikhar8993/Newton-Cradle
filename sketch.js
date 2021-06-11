const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar;
var ball,ball1,ball2,ball3,ball4;
var chain, chain1 ,chain2, chain3 , chain4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bar = new Bar(300,50,450,20);


   ball = new Ball(120,150,25);
   ball1 = new Ball(200,150,25);
   ball2 = new Ball(280,150,25);
   ball3 = new Ball(360,150,25);
   ball4 = new Ball(440,150,25);

   chain=new SlingShot(ball.body,{x:120,y:60});
   chain1=new SlingShot(ball1.body,{x:200,y:60});
   chain2=new SlingShot(ball2.body,{x:280,y:60});
   chain3=new SlingShot(ball3.body,{x:360,y:60});
   chain4=new SlingShot(ball4.body,{x:440,y:60});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  
 bar.display();

 ball.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();

 

  drawSprites();
 
}



