class paperball   {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2          
      }
      this.paperball=loadImage("sprites/paper.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      image(this.paperball,40,250,30,30)
      var pos =this.body.position;
      rectMode(CENTER);
      fill(0);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  