class Bin {
	constructor(x,y){
		var options = {
			isStatic : true
		}
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.x=x;
		this.y=y;
		this.height = height;
		this.width = width;	
		this.dustbinWidth=200;
		this.dustbinHeight=200;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
		this.image = loadImage("sprites/dustbingreen.png");
        World.add(world , this.body);

	}

	display() 
	{
//imageMode (CENTER);
//image(this.image , this.body.position.x , this.body.position.y,this.width,this.height);
var posBottom=this.bottomBody.position;
var posLeft=this.leftWallBody.position;
var posRight=this.rightWallBody.position;



push()
translate(posLeft.x, posLeft.y);
rectMode(CENTER)
angleMode(RADIANS)
fill(0)
rotate(this.angle)
rect(0,0,this.wallThickness, this.dustbinHeight);
pop()

push()
translate(posRight.x, posRight.y);
rectMode(CENTER)
angleMode(RADIANS)
fill(0)
rotate(-1*this.angle)
rect(0,0,this.wallThickness, this.dustbinHeight);
pop()

push()
translate(posBottom.x, posBottom.y);
rectMode(CENTER)
imageMode(CENTER)
angleMode(RADIANS)
fill(0)
image(this.image ,0,this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
pop()

	}

}

	

	
	