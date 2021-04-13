class Paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            'density':1.2,
            'friction': 0.0,
            'restitution':0.3
          };
          this.body = Bodies.circle(x, y,r, options);
          this.r=r
          this.image=loadImage('paper.png')
          World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        image(this.image,0, 0, this.r,this.r);
        pop()
    }
}