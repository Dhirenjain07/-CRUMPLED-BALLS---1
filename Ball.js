class Ball {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      //this.body.circle(150,190,2,options);
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }