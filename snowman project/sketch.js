function setup() {
  // put setup code here
  createCanvas(400,400)
}

function draw() {
  // put drawing code here
  // ground
  rect(0,370,400,25);
  // body
  ellipse(200,300,150,150);
  ellipse(200,200,100,100);
  ellipse(200,140,62,62);
  // arms
  line(150,200,100,150);
  line(250,200,300,150);
}
