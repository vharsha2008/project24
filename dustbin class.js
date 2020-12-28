class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0.6,
          friction:1.5,
          density:1.5          
      }
      this.dustbinclass=loadImage("sprites/dusetben.png.jpg")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      image(this.dustbinclass,600,150,150,150)
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };