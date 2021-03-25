class Ground{
    constructor(xInput,yInput,widthInput,heightInput){
        var options = {
            isStatic: false
        }
        this.width = widthInput;
        this.height = heightInput;
        this.body = Bodies.rectangle(xInput,yInput,widthInput,heightInput,options);
        World.add(userWorld,this.body);
    }
    display(){
        var position = this.body.position;
        push();
        fill("brown");
        rect(position.X,position.y, this.width,this.height);
        pop();
    }
}