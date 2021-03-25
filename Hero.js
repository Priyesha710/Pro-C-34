class Hero{
    constructor(x,y){
        var options = {
            isStatic: false,
            mass: 20
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(userWorld,this.body);
        this.image = loadImage("images/superhero.png");
    }
    display(){
        push();
        image(this.image,this.body.position.x,this.body.position.y,100,100);
        pop();
    }
}