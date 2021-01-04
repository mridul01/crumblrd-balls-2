
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;

var binObj;
var paperObj;
var groundObj;


function setup() {
	rectMode(CENTER);
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

binObj = new Bin(1100,400);
paperObj = new Paper(40,380);
groundObj = new Ground(750,600,1500,20);
	
}


function draw() {

	Engine.update(engine);
	rectMode(CENTER);
  background("grey");
  
 binObj.display();
 paperObj.display();
 groundObj.display();	

 textSize(20);
 fill ("white");
text("BY USING 'UP' AND 'DOWN' ARROW KEY , PUT THE PAPER INTO THE BIN",300,120);

 keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body , paperObj.body.position,{x:15,y:-10});
	}
}
