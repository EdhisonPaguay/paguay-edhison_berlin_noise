let xoff = 0.002;
function setup() {
  createCanvas(800, 100);
}

function draw() {
  background(random(0, 51));
  stroke(255);
  noFill();
  beginShape();
  for (let x = 1; x < width; x++) {
    stroke(random(0, 105), random(0, 255), 100);
    let y = noise(xoff) * height;
    vertex(x, y);

    xoff += 0.01;
  }
  endShape();
}
