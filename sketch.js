function setup() {
  createCanvas(900, 900);
  background(220, 10, 50);
}

function draw() {
  circle(mouseX, mouseY, random(0, 100));
}
