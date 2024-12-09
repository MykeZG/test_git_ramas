function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 10, 50);
}

function draw() {
  circle(mouseX, mouseY, random(0, 100));
  rect(mouseX, mouseY, random(0, 100));
}
