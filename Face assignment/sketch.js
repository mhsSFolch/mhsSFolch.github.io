/*
Face Assignment
Created by Ryan, Tagan, Sebastian, Tyler
March 25, 2019
*/

// do not scale// //some parts scalable, most not//
let facewidth = 200;
let faceheight = 300;

function setup() {
  // put setup code here

  createCanvas(300,400);

}

function draw() {
  // put drawing code here
  drawEars(width/4-30);
drawEars(3*width/4+30);

  ellipseMode(CENTER);

  fill(247,231,152);
  //the upper boddy (by sebastian)
  rectMode(CENTER);
  rect(width/2,3*height/4+50,facewidth/2-30,faceheight/4+1);
  fill(152,180,255);
ellipse(width/2,height-10,width,faceheight/6);
rect(width/2,height,width,faceheight/10);
  //face
  fill(247,231,152);
  ellipse(width/2,height/2,facewidth,faceheight);



  drawEyes(width/3,height/2)
  drawEyes(width/1.5,height/2)
  drawHair(width/2,height/2);
  drawNose();
  drawMouth(width/2,height/1.55);


// all facial hair (im so sorry) - ryan



  drawFacialhair(width/2+60,height/1.5+15-5-5-5-5-5);
  drawFacialhair(width/2+55,height/1.5+20-5-5-5-5-5);
  drawFacialhair(width/2+50,height/1.5+25-5-5-5-5-5);
  drawFacialhair(width/2+5,height/1.5+70-5-5-5-5-5);
  drawFacialhair(width/2,height/1.5+75-5-5-5-5-5);

  drawFacialhair(width/2+65,height/1.5+10-5-5-5-5);
  drawFacialhair(width/2+60,height/1.5+15-5-5-5-5);
  drawFacialhair(width/2+55,height/1.5+20-5-5-5-5);
  drawFacialhair(width/2+50,height/1.5+25-5-5-5-5);
  drawFacialhair(width/2+10,height/1.5+65-5-5-5-5);
  drawFacialhair(width/2+5,height/1.5+70-5-5-5-5);
  drawFacialhair(width/2,height/1.5+75-5-5-5-5);

  drawFacialhair(width/2+70,height/1.5+5-5-5-5);
  drawFacialhair(width/2+65,height/1.5+10-5-5-5);
  drawFacialhair(width/2+60,height/1.5+15-5-5-5);
  drawFacialhair(width/2+55,height/1.5+20-5-5-5);
  drawFacialhair(width/2+50,height/1.5+25-5-5-5);
  drawFacialhair(width/2+45,height/1.5+30-5-5-5);
  drawFacialhair(width/2+25,height/1.5+50-5-5-5);
  drawFacialhair(width/2+20,height/1.5+55-5-5-5);
  drawFacialhair(width/2+15,height/1.5+60-5-5-5);
  drawFacialhair(width/2+10,height/1.5+65-5-5-5);
  drawFacialhair(width/2+5,height/1.5+70-5-5-5);
  drawFacialhair(width/2,height/1.5+75-5-5-5);

  drawFacialhair(width/2+75,height/1.5-5-5);
  drawFacialhair(width/2+70,height/1.5+5-5-5);
  drawFacialhair(width/2+65,height/1.5+10-5-5);
  drawFacialhair(width/2+60,height/1.5+15-5-5);
  drawFacialhair(width/2+55,height/1.5+20-5-5);
  drawFacialhair(width/2+50,height/1.5+25-5-5);
  drawFacialhair(width/2+45,height/1.5+30-5-5);
  drawFacialhair(width/2+40,height/1.5+35-5-5);
  drawFacialhair(width/2+35,height/1.5+40-5-5);
  drawFacialhair(width/2+30,height/1.5+45-5-5);
  drawFacialhair(width/2+25,height/1.5+50-5-5);
  drawFacialhair(width/2+20,height/1.5+55-5-5);
  drawFacialhair(width/2+15,height/1.5+60-5-5);
  drawFacialhair(width/2+10,height/1.5+65-5-5);
  drawFacialhair(width/2+5,height/1.5+70-5-5);
  drawFacialhair(width/2,height/1.5+75-5-5);

  drawFacialhair(width/2+80,height/1.5-5-5);
  drawFacialhair(width/2+75,height/1.5-5);
  drawFacialhair(width/2+70,height/1.5+5-5);
  drawFacialhair(width/2+65,height/1.5+10-5);
  drawFacialhair(width/2+60,height/1.5+15-5);
  drawFacialhair(width/2+55,height/1.5+20-5);
  drawFacialhair(width/2+50,height/1.5+25-5);
  drawFacialhair(width/2+45,height/1.5+30-5);
  drawFacialhair(width/2+40,height/1.5+35-5);
  drawFacialhair(width/2+35,height/1.5+40-5);
  drawFacialhair(width/2+30,height/1.5+45-5);
  drawFacialhair(width/2+25,height/1.5+50-5);
  drawFacialhair(width/2+20,height/1.5+55-5);
  drawFacialhair(width/2+15,height/1.5+60-5);
  drawFacialhair(width/2+10,height/1.5+65-5);
  drawFacialhair(width/2+5,height/1.5+70-5);
  drawFacialhair(width/2,height/1.5+75-5);

  drawFacialhair(width/2+85,height/1.5-10);
  drawFacialhair(width/2+80,height/1.5-5);
  drawFacialhair(width/2+75,height/1.5);
  drawFacialhair(width/2+70,height/1.5+5);
  drawFacialhair(width/2+65,height/1.5+10);
  drawFacialhair(width/2+60,height/1.5+15);
  drawFacialhair(width/2+55,height/1.5+20);
  drawFacialhair(width/2+50,height/1.5+25);
  drawFacialhair(width/2+45,height/1.5+30);
  drawFacialhair(width/2+40,height/1.5+35);
  drawFacialhair(width/2+35,height/1.5+40);
  drawFacialhair(width/2+30,height/1.5+45);
  drawFacialhair(width/2+25,height/1.5+50);
  drawFacialhair(width/2+20,height/1.5+55);
  drawFacialhair(width/2+15,height/1.5+60);
  drawFacialhair(width/2+10,height/1.5+65);
  drawFacialhair(width/2+5,height/1.5+70);
  drawFacialhair(width/2,height/1.5+75);

  drawFacialhair(width/2+90,height/1.5-10);
  drawFacialhair(width/2+85,height/1.5-5);
  drawFacialhair(width/2+80,height/1.5);
  drawFacialhair(width/2+75,height/1.5+5);
  drawFacialhair(width/2+70,height/1.5+10);
  drawFacialhair(width/2+65,height/1.5+15);
  drawFacialhair(width/2+60,height/1.5+20);
  drawFacialhair(width/2+55,height/1.5+25);
  drawFacialhair(width/2+50,height/1.5+30);
  drawFacialhair(width/2+45,height/1.5+35);
  drawFacialhair(width/2+40,height/1.5+40);
  drawFacialhair(width/2+35,height/1.5+45);
  drawFacialhair(width/2+30,height/1.5+50);
  drawFacialhair(width/2+25,height/1.5+55);
  drawFacialhair(width/2+20,height/1.5+60);
  drawFacialhair(width/2+15,height/1.5+65);
  drawFacialhair(width/2+10,height/1.5+70);
  drawFacialhair(width/2+5,height/1.5+75);
  drawFacialhair(width/2,height/1.5+80);

  drawFacialhair(width/2+90,height/1.5-5);
  drawFacialhair(width/2+85,height/1.5);
  drawFacialhair(width/2+80,height/1.5+5);
  drawFacialhair(width/2+75,height/1.5+10);
  drawFacialhair(width/2+70,height/1.5+15);
  drawFacialhair(width/2+65,height/1.5+20);
  drawFacialhair(width/2+60,height/1.5+25);
  drawFacialhair(width/2+55,height/1.5+30);
  drawFacialhair(width/2+50,height/1.5+35);
  drawFacialhair(width/2+45,height/1.5+40);
  drawFacialhair(width/2+40,height/1.5+45);
  drawFacialhair(width/2+35,height/1.5+50);
  drawFacialhair(width/2+30,height/1.5+55);
  drawFacialhair(width/2+25,height/1.5+60);
  drawFacialhair(width/2+20,height/1.5+65);
  drawFacialhair(width/2+15,height/1.5+70);
  drawFacialhair(width/2+10,height/1.5+75);
  drawFacialhair(width/2+5,height/1.5+80);

  drawFacialhair(width/2+90,height/1.5-5+5);
  drawFacialhair(width/2+85,height/1.5+5);
  drawFacialhair(width/2+80,height/1.5+5+5);
  drawFacialhair(width/2+75,height/1.5+10+5);
  drawFacialhair(width/2+70,height/1.5+15+5);
  drawFacialhair(width/2+65,height/1.5+20+5);
  drawFacialhair(width/2+60,height/1.5+25+5);
  drawFacialhair(width/2+55,height/1.5+30+5);
  drawFacialhair(width/2+50,height/1.5+35+5);
  drawFacialhair(width/2+45,height/1.5+40+5);
  drawFacialhair(width/2+40,height/1.5+45+5);
  drawFacialhair(width/2+35,height/1.5+50+5);
  drawFacialhair(width/2+30,height/1.5+55+5);
  drawFacialhair(width/2+25,height/1.5+60+5);
  drawFacialhair(width/2+20,height/1.5+65+5);
  drawFacialhair(width/2+15,height/1.5+70+5);
  drawFacialhair(width/2+10,height/1.5+75+5);

  drawFacialhair(width/2+85,height/1.5+5+5);
  drawFacialhair(width/2+80,height/1.5+5+5+5);
  drawFacialhair(width/2+75,height/1.5+10+5+5);
  drawFacialhair(width/2+70,height/1.5+15+5+5);
  drawFacialhair(width/2+65,height/1.5+20+5+5);
  drawFacialhair(width/2+60,height/1.5+25+5+5);
  drawFacialhair(width/2+55,height/1.5+30+5+5);
  drawFacialhair(width/2+50,height/1.5+35+5+5);
  drawFacialhair(width/2+45,height/1.5+40+5+5);
  drawFacialhair(width/2+40,height/1.5+45+5+5);
  drawFacialhair(width/2+35,height/1.5+50+5+5);
  drawFacialhair(width/2+30,height/1.5+55+5+5);
  drawFacialhair(width/2+25,height/1.5+60+5+5);
  drawFacialhair(width/2+20,height/1.5+65+5+5);
  drawFacialhair(width/2+15,height/1.5+70+5+5);

  drawFacialhair(width/2+80,height/1.5+5+5+5+5);
  drawFacialhair(width/2+75,height/1.5+10+5+5+5);
  drawFacialhair(width/2+70,height/1.5+15+5+5+5);
  drawFacialhair(width/2+65,height/1.5+20+5+5+5);
  drawFacialhair(width/2+60,height/1.5+25+5+5+5);
  drawFacialhair(width/2+55,height/1.5+30+5+5+5);
  drawFacialhair(width/2+50,height/1.5+35+5+5+5);
  drawFacialhair(width/2+45,height/1.5+40+5+5+5);
  drawFacialhair(width/2+40,height/1.5+45+5+5+5);
  drawFacialhair(width/2+35,height/1.5+50+5+5+5);
  drawFacialhair(width/2+30,height/1.5+55+5+5+5);
  drawFacialhair(width/2+25,height/1.5+60+5+5+5);
  drawFacialhair(width/2+20,height/1.5+65+5+5+5);

  drawFacialhair(width/2+75,height/1.5+10+5+5+5+5);
  drawFacialhair(width/2+70,height/1.5+15+5+5+5+5);
  drawFacialhair(width/2+65,height/1.5+20+5+5+5+5);
  drawFacialhair(width/2+60,height/1.5+25+5+5+5+5);
  drawFacialhair(width/2+55,height/1.5+30+5+5+5+5);
  drawFacialhair(width/2+50,height/1.5+35+5+5+5+5);
  drawFacialhair(width/2+45,height/1.5+40+5+5+5+5);
  drawFacialhair(width/2+40,height/1.5+45+5+5+5+5);
  drawFacialhair(width/2+35,height/1.5+50+5+5+5+5);
  drawFacialhair(width/2+30,height/1.5+55+5+5+5+5);

  drawFacialhair(width/2+70,height/1.5+15+5+5+5+5+5);
  drawFacialhair(width/2+65,height/1.5+20+5+5+5+5+5);
  drawFacialhair(width/2+60,height/1.5+25+5+5+5+5+5);
  drawFacialhair(width/2+55,height/1.5+30+5+5+5+5+5);
  drawFacialhair(width/2+50,height/1.5+35+5+5+5+5+5);
  drawFacialhair(width/2+45,height/1.5+40+5+5+5+5+5);
  drawFacialhair(width/2+40,height/1.5+45+5+5+5+5+5);



  drawFacialhair(width/2,height/1.5+75-5-5-5-5-5-5);



  drawFacialhair(width/2-60,height/1.5+15-5-5-5-5-5);
  drawFacialhair(width/2-55,height/1.5+20-5-5-5-5-5);
  drawFacialhair(width/2-50,height/1.5+25-5-5-5-5-5);
  drawFacialhair(width/2-5,height/1.5+70-5-5-5-5-5);
  drawFacialhair(width/2,height/1.5+75-5-5-5-5-5);

  drawFacialhair(width/2-65,height/1.5+10-5-5-5-5);
  drawFacialhair(width/2-60,height/1.5+15-5-5-5-5);
  drawFacialhair(width/2-55,height/1.5+20-5-5-5-5);
  drawFacialhair(width/2-50,height/1.5+25-5-5-5-5);
  drawFacialhair(width/2-10,height/1.5+65-5-5-5-5);
  drawFacialhair(width/2-5,height/1.5+70-5-5-5-5);
  drawFacialhair(width/2,height/1.5+75-5-5-5-5);

  drawFacialhair(width/2-70,height/1.5+5-5-5-5);
  drawFacialhair(width/2-65,height/1.5+10-5-5-5);
  drawFacialhair(width/2-60,height/1.5+15-5-5-5);
  drawFacialhair(width/2-55,height/1.5+20-5-5-5);
  drawFacialhair(width/2-50,height/1.5+25-5-5-5);
  drawFacialhair(width/2-45,height/1.5+30-5-5-5);
  drawFacialhair(width/2-25,height/1.5+50-5-5-5);
  drawFacialhair(width/2-20,height/1.5+55-5-5-5);
  drawFacialhair(width/2-15,height/1.5+60-5-5-5);
  drawFacialhair(width/2-10,height/1.5+65-5-5-5);
  drawFacialhair(width/2-5,height/1.5+70-5-5-5);
  drawFacialhair(width/2,height/1.5+75-5-5-5);

  drawFacialhair(width/2-75,height/1.5-5-5);
  drawFacialhair(width/2-70,height/1.5+5-5-5);
  drawFacialhair(width/2-65,height/1.5+10-5-5);
  drawFacialhair(width/2-60,height/1.5+15-5-5);
  drawFacialhair(width/2-55,height/1.5+20-5-5);
  drawFacialhair(width/2-50,height/1.5+25-5-5);
  drawFacialhair(width/2-45,height/1.5+30-5-5);
  drawFacialhair(width/2-40,height/1.5+35-5-5);
  drawFacialhair(width/2-35,height/1.5+40-5-5);
  drawFacialhair(width/2-30,height/1.5+45-5-5);
  drawFacialhair(width/2-25,height/1.5+50-5-5);
  drawFacialhair(width/2-20,height/1.5+55-5-5);
  drawFacialhair(width/2-15,height/1.5+60-5-5);
  drawFacialhair(width/2-10,height/1.5+65-5-5);
  drawFacialhair(width/2-5,height/1.5+70-5-5);
  drawFacialhair(width/2,height/1.5+75-5-5);

  drawFacialhair(width/2-80,height/1.5-5-5);
  drawFacialhair(width/2-75,height/1.5-5);
  drawFacialhair(width/2-70,height/1.5+5-5);
  drawFacialhair(width/2-65,height/1.5+10-5);
  drawFacialhair(width/2-60,height/1.5+15-5);
  drawFacialhair(width/2-55,height/1.5+20-5);
  drawFacialhair(width/2-50,height/1.5+25-5);
  drawFacialhair(width/2-45,height/1.5+30-5);
  drawFacialhair(width/2-40,height/1.5+35-5);
  drawFacialhair(width/2-35,height/1.5+40-5);
  drawFacialhair(width/2-30,height/1.5+45-5);
  drawFacialhair(width/2-25,height/1.5+50-5);
  drawFacialhair(width/2-20,height/1.5+55-5);
  drawFacialhair(width/2-15,height/1.5+60-5);
  drawFacialhair(width/2-10,height/1.5+65-5);
  drawFacialhair(width/2-5,height/1.5+70-5);
  drawFacialhair(width/2,height/1.5+75-5);

  drawFacialhair(width/2-85,height/1.5-10);
  drawFacialhair(width/2-80,height/1.5-5);
  drawFacialhair(width/2-75,height/1.5);
  drawFacialhair(width/2-70,height/1.5+5);
  drawFacialhair(width/2-65,height/1.5+10);
  drawFacialhair(width/2-60,height/1.5+15);
  drawFacialhair(width/2-55,height/1.5+20);
  drawFacialhair(width/2-50,height/1.5+25);
  drawFacialhair(width/2-45,height/1.5+30);
  drawFacialhair(width/2-40,height/1.5+35);
  drawFacialhair(width/2-35,height/1.5+40);
  drawFacialhair(width/2-30,height/1.5+45);
  drawFacialhair(width/2-25,height/1.5+50);
  drawFacialhair(width/2-20,height/1.5+55);
  drawFacialhair(width/2-15,height/1.5+60);
  drawFacialhair(width/2-10,height/1.5+65);
  drawFacialhair(width/2-5,height/1.5+70);
  drawFacialhair(width/2,height/1.5+75);

  drawFacialhair(width/2-90,height/1.5-10);
  drawFacialhair(width/2-85,height/1.5-5);
  drawFacialhair(width/2-80,height/1.5);
  drawFacialhair(width/2-75,height/1.5+5);
  drawFacialhair(width/2-70,height/1.5+10);
  drawFacialhair(width/2-65,height/1.5+15);
  drawFacialhair(width/2-60,height/1.5+20);
  drawFacialhair(width/2-55,height/1.5+25);
  drawFacialhair(width/2-50,height/1.5+30);
  drawFacialhair(width/2-45,height/1.5+35);
  drawFacialhair(width/2-40,height/1.5+40);
  drawFacialhair(width/2-35,height/1.5+45);
  drawFacialhair(width/2-30,height/1.5+50);
  drawFacialhair(width/2-25,height/1.5+55);
  drawFacialhair(width/2-20,height/1.5+60);
  drawFacialhair(width/2-15,height/1.5+65);
  drawFacialhair(width/2-10,height/1.5+70);
  drawFacialhair(width/2-5,height/1.5+75);

  drawFacialhair(width/2-90,height/1.5-5);
  drawFacialhair(width/2-85,height/1.5);
  drawFacialhair(width/2-80,height/1.5+5);
  drawFacialhair(width/2-75,height/1.5+10);
  drawFacialhair(width/2-70,height/1.5+15);
  drawFacialhair(width/2-65,height/1.5+20);
  drawFacialhair(width/2-60,height/1.5+25);
  drawFacialhair(width/2-55,height/1.5+30);
  drawFacialhair(width/2-50,height/1.5+35);
  drawFacialhair(width/2-45,height/1.5+40);
  drawFacialhair(width/2-40,height/1.5+45);
  drawFacialhair(width/2-35,height/1.5+50);
  drawFacialhair(width/2-30,height/1.5+55);
  drawFacialhair(width/2-25,height/1.5+60);
  drawFacialhair(width/2-20,height/1.5+65);
  drawFacialhair(width/2-15,height/1.5+70);
  drawFacialhair(width/2-10,height/1.5+75);
  drawFacialhair(width/2-5,height/1.5+80);

  drawFacialhair(width/2-90,height/1.5-5+5);
  drawFacialhair(width/2-85,height/1.5+5);
  drawFacialhair(width/2-80,height/1.5+5+5);
  drawFacialhair(width/2-75,height/1.5+10+5);
  drawFacialhair(width/2-70,height/1.5+15+5);
  drawFacialhair(width/2-65,height/1.5+20+5);
  drawFacialhair(width/2-60,height/1.5+25+5);
  drawFacialhair(width/2-55,height/1.5+30+5);
  drawFacialhair(width/2-50,height/1.5+35+5);
  drawFacialhair(width/2-45,height/1.5+40+5);
  drawFacialhair(width/2-40,height/1.5+45+5);
  drawFacialhair(width/2-35,height/1.5+50+5);
  drawFacialhair(width/2-30,height/1.5+55+5);
  drawFacialhair(width/2-25,height/1.5+60+5);
  drawFacialhair(width/2-20,height/1.5+65+5);
  drawFacialhair(width/2-15,height/1.5+70+5);
  drawFacialhair(width/2-10,height/1.5+75+5);

  drawFacialhair(width/2-85,height/1.5+5+5);
  drawFacialhair(width/2-80,height/1.5+5+5+5);
  drawFacialhair(width/2-75,height/1.5+10+5+5);
  drawFacialhair(width/2-70,height/1.5+15+5+5);
  drawFacialhair(width/2-65,height/1.5+20+5+5);
  drawFacialhair(width/2-60,height/1.5+25+5+5);
  drawFacialhair(width/2-55,height/1.5+30+5+5);
  drawFacialhair(width/2-50,height/1.5+35+5+5);
  drawFacialhair(width/2-45,height/1.5+40+5+5);
  drawFacialhair(width/2-40,height/1.5+45+5+5);
  drawFacialhair(width/2-35,height/1.5+50+5+5);
  drawFacialhair(width/2-30,height/1.5+55+5+5);
  drawFacialhair(width/2-25,height/1.5+60+5+5);
  drawFacialhair(width/2-20,height/1.5+65+5+5);
  drawFacialhair(width/2-15,height/1.5+70+5+5);

  drawFacialhair(width/2-80,height/1.5+5+5+5+5);
  drawFacialhair(width/2-75,height/1.5+10+5+5+5);
  drawFacialhair(width/2-70,height/1.5+15+5+5+5);
  drawFacialhair(width/2-65,height/1.5+20+5+5+5);
  drawFacialhair(width/2-60,height/1.5+25+5+5+5);
  drawFacialhair(width/2-55,height/1.5+30+5+5+5);
  drawFacialhair(width/2-50,height/1.5+35+5+5+5);
  drawFacialhair(width/2-45,height/1.5+40+5+5+5);
  drawFacialhair(width/2-40,height/1.5+45+5+5+5);
  drawFacialhair(width/2-35,height/1.5+50+5+5+5);
  drawFacialhair(width/2-30,height/1.5+55+5+5+5);
  drawFacialhair(width/2-25,height/1.5+60+5+5+5);
  drawFacialhair(width/2-20,height/1.5+65+5+5+5);

  drawFacialhair(width/2-75,height/1.5+10+5+5+5+5);
  drawFacialhair(width/2-70,height/1.5+15+5+5+5+5);
  drawFacialhair(width/2-65,height/1.5+20+5+5+5+5);
  drawFacialhair(width/2-60,height/1.5+25+5+5+5+5);
  drawFacialhair(width/2-55,height/1.5+30+5+5+5+5);
  drawFacialhair(width/2-50,height/1.5+35+5+5+5+5);
  drawFacialhair(width/2-45,height/1.5+40+5+5+5+5);
  drawFacialhair(width/2-40,height/1.5+45+5+5+5+5);
  drawFacialhair(width/2-35,height/1.5+50+5+5+5+5);
  drawFacialhair(width/2-30,height/1.5+55+5+5+5+5);

  drawFacialhair(width/2-70,height/1.5+15+5+5+5+5+5);
  drawFacialhair(width/2-65,height/1.5+20+5+5+5+5+5);
  drawFacialhair(width/2-60,height/1.5+25+5+5+5+5+5);
  drawFacialhair(width/2-55,height/1.5+30+5+5+5+5+5);
  drawFacialhair(width/2-50,height/1.5+35+5+5+5+5+5);
  drawFacialhair(width/2-45,height/1.5+40+5+5+5+5+5);
  drawFacialhair(width/2-40,height/1.5+45+5+5+5+5+5);



  drawEyebrows();
  drawGlasses();

}

//eyes created by Sebastian
function drawEyes(x,y) {
  let eyewidth=facewidth-150;
  let eyeheight=faceheight-275;
  //the main part of the eye
  fill(255);
  ellipseMode(CENTER);
  ellipse(x,2*y/3+20,facewidth-149,faceheight-275);
  fill(109,230,115);
  ellipse(x,2*y/3+20,facewidth-175,faceheight-275);
  fill(0);
  ellipse(x,2*y/3+20,facewidth-185,faceheight-285);
  fill(255);
//eyelashes
  line(x,2*y/3+20+eyeheight/2,x,2*y/3+20+eyeheight/2+5);
  line(x-eyewidth/3+4,2*y/3+20+eyeheight/2-1,x-eyewidth/3+2,2*y/3+20+eyeheight/2+4);
  line(x+eyewidth/3-4,2*y/3+20+eyeheight/2-1,x+eyewidth/3-2,2*y/3+20+eyeheight/2+4);
  line(x-1.7*eyewidth/3+4,2*y/3+20+eyeheight/2-8,x-1.7*eyewidth/3+1,2*y/3+20+eyeheight/2-4);
  line(x+1.7*eyewidth/3-4,2*y/3+20+eyeheight/2-8,x+1.7*eyewidth/3-1,2*y/3+20+eyeheight/2-4);
  line(x,2*y/3-eyeheight/2+20,x,2*y/3+20-eyeheight/2-5);
  line(x-eyewidth/3+4,2*y/3+20-eyeheight/2+1,x-eyewidth/3+2,2*y/3+20-eyeheight/2-4);
  line(x+eyewidth/3-4,2*y/3+20-eyeheight/2+1,x+eyewidth/3-2,2*y/3+20-eyeheight/2-4);
  line(x-1.7*eyewidth/3+4,2*y/3+20-eyeheight/2+8,x-1.7*eyewidth/3+1,2*y/3+20-eyeheight/2+4);
  line(x+1.7*eyewidth/3-4,2*y/3+20-eyeheight/2+8,x+1.7*eyewidth/3-1,2*y/3+20-eyeheight/2+4);
}



function drawHair(x,y) {
  //hair created by Tyler
//the hair
let hairwidth = facewidth-100
let hairheight = faceheight-200
fill(161,131,87);
noStroke();
quad(200/2/0.75,130/3*2,177/2/0.75,115/3*2,210/2/0.75,65/3*2,267/2/0.75,55/3*2);
quad(200/2/0.75,130/3*2,267/2/0.75,55/3*2,290/2/0.75,90/3*2,270/2/0.75,90/3*2);
quad(267/2/0.75,55/3*2,270/2/0.75,90/3*2,300/2/0.75,110/3*2,320/2/0.75,100/3*2);
triangle(270/2/0.75,90/3*2,250/2/0.75,110/3*2,260/2/0.75,90/3*2);
stroke(0);



}

function drawNose(){
  //Nose done by Tagan
  var noseSize = 30;
line(135,200,150,150);
line(165,200,150,150);
ellipse(150, 200, noseSize, noseSize);

}

function drawEyebrows(){
//done by Tagan
var eyebrowHeight = 15
var eyebrowWidth = 50
var eyebrowPlacementone = 100
var eyebrowPlacementtwo = 200
rect(eyebrowPlacementone,faceheight-196, eyebrowWidth, eyebrowHeight);
rect(eyebrowPlacementtwo,faceheight-196, eyebrowWidth, eyebrowHeight);

}




function drawMouth(x,y) {
// mouth by Ryan

// lips

fill(255);
stroke(255,105,151);
strokeWeight(3);
arc(x, y, facewidth/2, faceheight/3, 0, PI);
stroke(0);
arc(x, y, facewidth/2, faceheight/6, 0, PI);

//teeth

line(x-50,y,x+50,y);
line(x,y,x,y+50);
line(x+25,y,x+25,y+43);
line(x-25,y,x-25,y+43);
stroke(255,105,151);
line(x-50,y,x+50,y);
stroke(0);
strokeWeight(1);

fill(255);

}

function drawFacialhair(x,y) {
 // facial hair by Ryan
  fill(0);
  ellipse(x,y,1,1);

}

function drawGlasses() {
  //Glasses by Sebastian
  let x = width/3;
  let y = height/2;
rectMode(CENTER);
//Lenses
fill(173,252,228,75);
stroke(254,197,47);
rect(x,2*y/3+20,facewidth-139,faceheight-265);
x=width/1.5;
rect(x,2*y/3+20,facewidth-139,faceheight-265);
//frame
fill(254,197,47);
y = height/2-18.5;
x = width/2;
rect(x,2*y/3+20-8,facewidth-15,faceheight-295);
fill(255);
stroke(0);
}

function drawEars(x) {
  //by Sebastian
    fill(247,231,152);
    stroke(247,231,152);
  ellipseMode(CENTER);
  ellipse(x,height/2-20,facewidth/facewidth*30,facewidth/facewidth*30);
  ellipse(x,height/2+10,faceheight/faceheight*20,faceheight/faceheight*20);
quad(x-15,height/2-20,x+15,height/2-20,x+10,height/2+10,x-10,height/2+10);
stroke(0);

}
