class Baddies {
  constructor(img) {
    this.pos = createVector(random(1000), random(400));
    this.vel = createVector(0, random(-1,1));
    this.acc = createVector(0, 0);
    this.pic = img;
    this.size=10;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill("green");
    // ellipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x, this.pos.y, this.size, this.size);
  }

//   applyForce(f) {
//     this.acc.add(f);
//   }

//   edges() {
//     if (this.pos.y > 350) {
//       this.vel.y *= -0.5;
//       this.pos.y = 350;
//     }
//   }
}
