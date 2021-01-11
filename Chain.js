class Chain 
{
    constructor(BodyA,PointB,xOffset)
    {
        var options=
        {
            bodyA:BodyA,
            PointB:PointB,
            PointB:{x:xOffset,y:0}
        }
this.rope = Constraint.create(options);
this.xOffset=xOffset;
World .add(world,this.rope);
    }

display()
{
    var pointA=this.rope.bodyA.position;
   // var pointB=this.rope.bodyB.position;
    stroke("black");
    strokeWeight(4);
    line (pointA.x, pointA.y,pointB.x+this.Offset,pointB.y)
}

}
