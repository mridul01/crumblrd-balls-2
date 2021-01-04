class Paper{
    constructor(x,y){
        var ball_options = {
            isStatic: false,
            restitution : 0.3,
            friction: 0.5,
            density :1
        }
        this.x =x;
        this.y = y;
        this.r = 40;
        this.body = Bodies.circle(x,y,40,ball_options);
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body);
    }
    display(){
       var paperPos = this.body.position    

        push()
      translate(paperPos.x , paperPos.y);
      rectMode(CENTER);
       strokeWeight(1);
       fill("white");
       imageMode(CENTER);
        image(this.image ,0,0 ,this.r,this.r);
        pop ()
            
    }
}