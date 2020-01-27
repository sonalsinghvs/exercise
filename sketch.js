function setup() {
  createCanvas(1000, 1000);
}

console.log;
let username = prompt("Waht color snowman do you want?");
console.log("Pink or Blue");

function draw() {
 background(204);

 //environment
 triangle(30, 115, 75, 20, 115, 115);
 triangle(115, 115, 180, 20, 215, 115);
 triangle(215, 115, 300, 20, 315, 115);
 triangle(315, 115, 400, 20, 415, 115);
 triangle(415, 115, 500, 20, 515, 115);
 noFill();
stroke(255, 102, 0);
line(85, 20, 10, 10);
line(90, 90, 15, 80);
stroke(0, 0, 0);
bezier(185, 120, 110, 110, 190, 190, 115, 180);
bezier(285, 220, 210, 210, 290, 290, 215, 280);
bezier(385, 320, 310, 310, 390, 390, 315, 380);
bezier(485, 420, 410, 410, 490, 490, 415, 480);
bezier(585, 520, 510, 510, 590, 590, 515, 580);
stroke('purple'); 
strokeWeight(10); 
point(130, 120);
point(200, 400);
point(600, 800);
point(150, 375);
point(400, 500);
point(100, 600);
point(300, 800);
point(250, 475);
point(600, 120);
point(700, 400);
point(800, 800);
point(10, 375);
 //snowman body
  fill('#fae');
  stroke(255, 204, 0);
  strokeWeight(4);
  ellipse (300, 200, 100, 100);
  ellipse (300, 350, 200, 200);
  noStroke();
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
  ellipse (280, 190, 5, 5);
  ellipse (315, 190, 5, 5);
  ellipse (300, 250, 35, 15);
  fill(51);
  ellipse (300, 300, 15, 15);
  ellipse (300, 350, 15, 15);
  ellipse (300, 400, 15, 15);
  //snowman friend
  stroke('purple'); 
  strokeWeight(10); 
  ellipse (500, 400, 75, 75);
  ellipse (500, 315, 50, 75);
  noStroke();
  fill(51);
  ellipse (280, 190, 15, 15);
  ellipse (315, 190, 15, 15);
  bezier(300, 520, 320, 510, 400, 590, 320, 580);

}
