
let x1 = 400
let y1 = 300
let size = 100
let numStars = 0;


function setup() {
  // put setup code here
  createCanvas(800,600)
}

function draw() {
  // put drawing code here
  
  while (numStars<5) {
    star(random(0,800),random(0,600),random(1,150))
    numStars+=1;
  }
}
function star(x,y,s) {
  noStroke()
  fill(random(0,255),random(0,255),random(0,255))
  rect(x,y,s,s)
  fill(255)
  ellipse(x,y,s,s)
  ellipse(x+s,y,s,s)
  ellipse(x,y+s,s,s)
  ellipse(x+s,y+s,s,s)
  stroke(0)

}
