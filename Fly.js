class Rope{
    constructor(pointAInput,bodyBInput){
        var options = {
            pointA: pointAInput,
            bodyB: bodyBInput
        }
        this.constraint = Constraint.create(options);
        World.add(userWorld,this.constraint);
    }
    display(){
        var pointA = this.constraint.pointA;
        var pointB = this.constraint.bodyB.position;
        push ();
        strokeWeight(20);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop ();
    }
}