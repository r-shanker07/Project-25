
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	paper = new Paper(100,640,70)
	ground = new Ground(400,height,800,20)
	bin = new Bin(600,590,200,200)
	


	Engine.run(engine);
  
}

function  keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-150})
	}
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  ground.display();
  bin.display();

  drawSprites();
 
}



