class Tile {
    constructor(x, y, type, c) {
      this.x = x;
      this.y = y;
      this.type = type;
      this.c = c;
    }
    
    display() {
      push();
      translate(this.x, this.y);
      
      stroke(this.c);
      noFill();
      strokeWeight(5);
      if (this.type == 0) {
        // Shape 1
        arc(0, 0, size, size, 0, 90);
        arc(size, size, size, size, 180, 270);
      } else {
        // Shape 2
        arc(size, 0, size, size, 90, 180);
        arc(0, size, size, size, 270, 360);
      }
      pop();
    }
  }