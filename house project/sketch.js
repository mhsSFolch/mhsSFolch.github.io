/*
House Assignment
Created by Sebastian Folch
March 18, 2019
*/
function setup() {
  // Create a Canvas
  createCanvas(1600,1200);
}

function draw() {
  //make sure the house will still fit on the canvas 0 to 2 will work
  let scale=1;
  //Ground
  line(scale*0,scale*500,scale*800,scale*500);
  //Code to draw the house
  //House walls
  fill(226,239,215);
  rect(scale*300,scale*400,scale*200,scale*100);
  //the shape that allows me to paint the chimmny
  noStroke();
  fill(226,239,215);
   rect(scale*320,scale*320,scale*22,scale*60);
  //the shapes that allowed me to paint the roof
  fill(194,139,58);
  triangle(scale*400,scale*250,scale*450,scale*350,scale*350,scale*350);
  triangle(scale*350,scale*350,scale*375,scale*350,scale*375,scale*400);
  triangle(scale*450,scale*350,scale*425,scale*350,scale*425,scale*400);
  fill(171,122,52);
  triangle(scale*350,scale*350,scale*375,scale*400,scale*300,scale*400);
  triangle(scale*450,scale*350,scale*500,scale*400,scale*425,scale*400);
  //shapes that allow me to paint the decorations
  fill(194,139,58);
  triangle(scale*310,scale*400,scale*350,scale*360,scale*350,scale*400);
  triangle(scale*490,scale*400,scale*450,scale*360,scale*450,scale*400);
  //to allow me to paint the upper window
  fill(128,238,218);
  rect(scale*375,scale*320,scale*50,scale*80);
  // Roof design
  stroke(0,0,0);
  line(scale*300,scale*400,scale*350,scale*350);
  line(scale*500,scale*400,scale*450,scale*350);
  line(scale*450,scale*350,scale*400,scale*250);
  line(scale*350,scale*350,scale*400,scale*250);
  // Top window
  ellipseMode(CENTER)
  ellipse(scale*400,scale*320,scale*50,scale*75);
  line(scale*375,scale*400,scale*375,scale*320);
  line(scale*425,scale*400,scale*425,scale*320);
  line(scale*400,scale*400,scale*400,scale*282.5);
  line(scale*375,scale*377.5,scale*425,scale*377.5);
  line(scale*375,scale*320,scale*425,scale*320);
  // Left window
  ellipseMode(CORNER);
  rect(scale*325,scale*425,scale*40,scale*40);
  ellipse(scale*325,scale*415,scale*40,scale*25);
  line(scale*345,scale*465,scale*345,scale*415);
  line(scale*325,scale*445,scale*365,scale*445);
  //Right window
  ellipseMode(CORNER);
  rect(scale*435,scale*425,scale*40,scale*40);
  ellipse(scale*435,scale*415,scale*40,scale*25);
  line(scale*455,scale*465,scale*455,scale*415);
  line(scale*435,scale*445,scale*475,scale*445);
  //Door design
  fill(171,122,52);
  ellipseMode(CENTER);
  rect(scale*380,scale*425,scale*40,scale*75);
  fill(128,238,218);
  noStroke();
  triangle(scale*400,scale*435,scale*390,scale*445,scale*410,scale*445);
  triangle(scale*400,scale*455,scale*390,scale*445,scale*410,scale*445);
  stroke(0,0,0);
  ellipse(scale*400,scale*435,scale*10,scale*10);
  ellipse(scale*400,scale*455,scale*10,scale*10);
  ellipse(scale*390,scale*445,scale*10,scale*10);
  ellipse(scale*410,scale*445,scale*10,scale*10);
  line(scale*400,scale*435,scale*390,scale*445);
  line(scale*400,scale*435,scale*410,scale*445);
  line(scale*400,scale*455,scale*390,scale*445);
  line(scale*400,scale*455,scale*410,scale*445);
  fill(221,199,79);
  rect(scale*410,scale*465,scale*9,scale*5);
  //Left decoration
  line(scale*310,scale*400,scale*350,scale*360);
  line(scale*350,scale*360,scale*350,scale*400);
  line(scale*330,scale*380,scale*350,scale*400);
  line(scale*350,scale*350,scale*375,scale*400);
  //Right decoration
  line(scale*490,scale*400,scale*450,scale*360);
  line(scale*450,scale*360,scale*450,scale*400);
  line(scale*470,scale*380,scale*450,scale*400);
  line(scale*450,scale*350,scale*425,scale*400);
  //Smoke
  fill(50,50,50);
  ellipseMode(CORNER);
  ellipse(scale*328,scale*307,scale*10,scale*10);
  ellipse(scale*323,scale*295,scale*15,scale*15);
  ellipse(scale*318,scale*290,scale*15,scale*15);
  ellipse(scale*310,scale*275,scale*20,scale*20);
  ellipse(scale*305,scale*265,scale*20,scale*20);
  ellipse(scale*300,scale*250,scale*25,scale*25);
  ellipse(scale*295,scale*240,scale*25,scale*25);
  ellipse(scale*290,scale*220,scale*30,scale*30);
  //chimmny
  fill(179,179,179);
  line(scale*320,scale*380,scale*320,scale*320);
  rect(scale*318,scale*315,scale*25,scale*5);
  line(scale*341,scale*320,scale*341,scale*360);
  //end of draw function
}
