/*
Sebastian Folch
April 30, 2019
*/
//Global variables
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
  //drawing the five stars in random spots
  while (numStars<5) {
    star(random(0,800),random(0,600),random(1,150))
    //increasing the value of numStars
    numStars+=1;
    //end of while statment
  }
  //end of draw
}
//the function that houses the design of the stars
function star(x,y,s) {
  //removeing the stroke
  noStroke()
  //randomizeing color
  fill(random(0,255),random(0,255),random(0,255))
  rect(x,y,s,s)
  //making the rectangle into a star
  fill(255)
  ellipse(x,y,s,s)
  ellipse(x+s,y,s,s)
  ellipse(x,y+s,s,s)
  ellipse(x+s,y+s,s,s)
  stroke(0)
  //end of star drawing function
}
