function setup() {
  createCanvas(1000, 1000);
}

console.log;
let username = prompt("Waht color snowman do you want?");
console.log("Pink or Blue");

function draw() {
 background(204);
 //snowman head
  fill('#fae');
  noStroke();
  ellipse (300, 200, 100, 100);
  ellipse (300, 350, 200, 200);
  rect (225, 125, 150, 25);
  rect (260, 100, 75, 25);
  fill(51);
  ellipse (280, 190, 15, 15);
  ellipse (315, 190, 15, 15);
  fill('red');
  triangle (300, 200, 280, 210, 310, 210);
  fill(255, 204, 0);
  strokeWeight(4);
  stroke(51);
  line(180, 220, 280, 270);
  line(325, 270, 435, 270);
  }
    

