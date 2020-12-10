class Bird {
  //----ONLY X AND Y , WIDTH AND HEIGHT IS FIXED AT 50
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(myWorld, this.body);
    };
    display(){
      //====CHANGING POSITION WITH MOUSE
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;

      var angle = this.body.angle;
      angleMode(RADIANS)
      push();
      translate(pos.x, pos.y);
      rotate(angle);

      //===ADDING STROKE AND FILL
      strokeWeight(3);
      stroke('blue')
      fill('red')
      
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  