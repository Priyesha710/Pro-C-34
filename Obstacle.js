class Obstacle{
    constructor(xInput,yInput){
        var options = {

        }
        this.x = xInput;
        this.y = yInput;
        this.body = Bodies.rectangle(xInput,yInput,50,50,options);
        World.add(userWorld,this.body);

    }
    display(){
        // push ();
        strokeWeight(5);
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,50,50);
        // pop ();

    }
}