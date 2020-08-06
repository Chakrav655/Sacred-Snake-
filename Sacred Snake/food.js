class Food{

constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 10;
        this.height = 10;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        
        rectMode(CENTER);
        rect( random(10,390),random(1,390), 10, 10);
        pop();
      }
}