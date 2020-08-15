// class Box extends BaseClass {
//   constructor(x, y, width, height){
//     super(x,y,width,height);
//   }
//   display() {
//     super.display();
//   }
// };

class Box {
  constructor(x,y,width,height) {
    var options = {
        // isStatic: true
        restituition : 0.4,
        friction : 0.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    // this.image = loadImage("polygon_img.jpg");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("green");

    rect(pos.x, pos.y, this.width, this.height);
  }
};
