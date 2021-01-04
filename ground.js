class Ground {
    constructor(x,y,width,height){
var options = {
    isStatic : true
}
this.x =750;
this.y = 600;
this.width = 1500;
this.height = 20;
this.Body = Bodies.rectangle(750,600,1500,20,options);
World.add(world,this.Body);
    }
    display(){
        var groundPos = this.Body.position;

        rectMode(CENTER);
        fill("brown");
        rect(750,600,1500, 20);

    }
}