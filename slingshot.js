class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:50,
        }
        this.cons=Matter.Constraint.create(options);

        World.add(world,this.cons);
    }
    display(){
        if (this.cons.bodyA){
var pointA=this.cons.bodyA.position;
var pointB=this.cons.pointB;

        stroke("red");
        line(pointA.x+10,pointA.y+10,pointB.x,pointB.y);
        }
    }
    fly(){
   this.cons.bodyA=null;
    }
attach(body){
    this.cons.bodyA=body;
}


}