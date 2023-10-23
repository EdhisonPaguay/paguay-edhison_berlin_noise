let xoff = 0.02;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(random(0, 10));
  noStroke();
  fill(random(0, 105), random(0, 255), 100); // Color de relleno aleatorio

  for (let x = 1; x < width; x += 20) {
    // Incremento de x en 20 para espaciar los círculos
    let y = noise(xoff) * height;
    ellipse(x, y, 20, 20);

    xoff += 0.05;
  }
}
