class Paper{
    constructor(x, y, diameter) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.diameter = diameter
        
        World.add(world, this.body);
        this.image = loadImage("Images/paperBall.png")
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        imageMode(CENTER)
        image(this.image,0, 0, 50, 50);
        pop();
      }
}