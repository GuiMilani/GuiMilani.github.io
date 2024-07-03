/*
----- Coding Tutorial by Patt Vira ----- 
Name: Truchet Tiles (Quarter Circles)
Video Tutorial: https://youtu.be/9DU5WiNdu74?si=CXopbKgzoZXv5ct7

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let tiles = []; 
let cols; let rows; let size = 40;
let colors; 

function setup() {
  myCanvas = createCanvas(300, 300);
  myCanvas.parent('random-art');
  angleMode(DEGREES);
  colors = [color(189, 147, 249), color(255, 171, 198), color(139, 233, 253), color(140, 250, 123), color(255, 184, 108)];
  backgrounds = [color(51, 51, 51), color(77, 77, 77), color(82, 82, 82), color(65, 65, 65), color(57, 57, 57)]
  background_selected = backgrounds[floor(random(5))]
  
  cols = width/size;
  rows = height/size;
  for (let i=0; i<cols; i++) {
    tiles[i] = [];
    for (let j=0; j<rows; j++) {
      tiles[i][j] = new Tile(i*size, j*size, floor(random(2)), colors[floor(random(5))]);
    }
  }
}

function draw() {
  background(background_selected);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      tiles[i][j].display();
    }
  }
  
}