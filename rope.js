class Rope 
{
    constructor(BodyA,BodyB,xOffset)
    {
        var options=
        {
            bodyA:BodyA,
            bodyB:BodyB,
            length:250,
            stiffness:0.4,
            pointB:{x:xOffset,y:0}
        }
this.rope = Constraint.create(options);
this.xOffset=xOffset;
World .add(world,this.rope);
    }

display()
{   
    var pointA=this.rope.bodyA.position;
   var pointB=this.rope.bodyB.position;
    stroke("black");
    strokeWeight(4);
    line (pointA.x, pointA.y,pointB.x+this.xOffset,pointB.y)
}

}