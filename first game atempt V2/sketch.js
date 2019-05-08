/*
Sebastian Folch
April 11, 2019

Link http://localhost:8080/p5/first game atempt V2
*/
//global variables
let x1 = 0
let x2 = 400
let y1 = 0
let y2 = 200
let size = 50
let sp1 = 2
let sp2 = -2
let sp3 = 3
let sp4 = 3
var sound
var sound2
let hit = false
let score = 0
let p = false
var img
let df = 10
let highscore = 0
let level = 0

function preload() {
  //loading sounds and images the game uses
  sound = loadSound('./basic_tone.wav');
  sound2 = loadSound('./p_c_g0.56_int.wav')
  img = loadImage('PIA15417-800x600.jpg')
}

function setup() {
  // put setup code here
  createCanvas(800,600)
}

function draw() {
  // put drawing code here
  //Instruction screen
  if (level === 0) {
    background(0)
    textAlign(CENTER,CENTER)
    textSize(32)
    fill(255)
    text('-------=====Controls=====------- \nArrow keys to move.',width/2,height/2+75)
    text('-------=====Goal=====------- \nAvoid the enemy ships attempts to ram into you.',width/2,height/2-50)
    textSize(12)
    text('---==Hit enter to proced.==---',width/2,height/2+200)
    //time to get to the game
    if (keyIsDown(ENTER)) {
      level = level+1
      //end of if statment
    }
    //end of instruction screen
  }
  else if (level === 1) {
//gameover screen
    if (hit) {
    fill(255,0,0)
    rect(0,0,width,height)
   fill(255)
   textSize(70)
   text('Game Over',width/2,height/2)
   textSize(32)
   text('Hit enter to retry',width/2,height/2+height/4)
   text(score,width/2,height/2+height/8-height/4*2)
   //playing gameover noise
   sound2.playMode('untilDone')
   // checking the highscore
     if (score > highscore) {
    highscore = score
     //end of if statment for highscore
   }
  // displaying your highscore
  textSize(22)
  text(highscore,width/2,height/3-height/6)
    if (p) {
     //reseting the games important variables
     if (keyIsDown(ENTER)) {
      x2 = 400
      x1 = 100
      y1 = 100
      y2 = 300
      hit = false
      score = 0
      p = false
      df = 10
      sp1 = 2
      sp2 = 2
      //end of reseting statment
      }
    }
//makeing sure the gameover sound is played only once
  else {
   //playing the gameover sound
   sound2.play()
   sound2.pause(1)
   p = true
  }
}
  else {
  //the rest of the game code
  //clearing the background
    fill(255)
  background(0)
  //loading the background image
  image(img,0,0,800,600)
  //checking for a colision
  hit = collideRectCircle(x2,y2,size*2,size*2,x1,y1,size,size)

  //movement
  leftright()
  updown()
  // player sprite design
  fill(100)
  ellipse(x1,y1,size,size)
  fill(188,188,188)
  ellipse(x1,y1,size,size)
    fill(90,167,55)
  ellipse(x1,y1,size,size/10*2)
  ellipse(x1,y1,size/10*2,size)
  fill(240,255,0)
  ellipse(x1-size/2,y1,size/10,size/10)
  ellipse(x1+size/2,y1,size/10,size/10)
  ellipse(x1,y1-size/2,size/10,size/10)
  ellipse(x1,y1+size/2,size/10,size/10)
  ellipseMode(CENTER)
  fill(50)
  ellipse(x1-size/4,y1-size/4,size/4,size/4)
  ellipse(x1+size/4,y1-size/4,size/4,size/4)
  ellipse(x1-size/4,y1+size/4,size/4,size/4)
  ellipse(x1+size/4,y1+size/4,size/4,size/4)
  strokeWeight(5)
  stroke(100)
  line(x1+size/4,y1+size/4,x1+size/2.5,y1+size/2.5)
  line(x1-size/4,y1+size/4,x1-size/2.5,y1+size/2.5)
  line(x1+size/4,y1-size/4,x1+size/2.5,y1-size/2.5)
  line(x1-size/4,y1-size/4,x1-size/2.5,y1-size/2.5)
  strokeWeight(1)
  stroke(0)
  //enemy movement
  if (x2 <= 0 || x2+size*2 >= width) {
    sp1 =-sp1
    //increasing score
    score = score+1
    //playing score up noise
    sound.play()
    //end of if statment
  }
  if (y2 <= 0 || y2+size*2 >= height) {
    sp2 =-sp2
    //increasing score
    score= score+1
    //playing score up noise
    sound.play()
    //end of if statment
  }
  //moveing the enemy
  x2 = x2+sp1
  y2 = y2+sp2
  //enemy sprite design
  noFill()
  rect(x2,y2,size*2,size*2)
  fill(188)
  rect(x2,y2,size*2,size/4)
  rect(x2,y2,size/4,size*2)
  rect(x2+size*2-size/4,y2,size/4,size*2)
  rect(x2,y2+size*2-size/4,size*2,size/4)
  rectMode(CENTER)
  rect(x2+size,y2+size,size*2,size/4)
  rectMode(CORNER)
  ellipseMode(CENTER)
  fill(90,167,55)
  ellipse(x2+size,y2+size,size,size)
  fill(127,255,116)
  ellipse(x2+size,y2+size,size/2,size/2)
  fill(240,255,0)
  ellipse(x2,y2,size/4,size/4)
  ellipse(x2+size*2,y2,size/4,size/4)
  ellipse(x2,y2+size*2,size/4,size/4)
  ellipse(x2+size*2,y2+size*2,size/4,size/4)
  stroke(255)
  line(x2,y2,x2+size*2,y2+size*2)
  line(x2+size*2,y2,x2,y2+size*2)
  stroke(0)
  fill(50)
  ellipse(x2,y2+size,size/2,size/2)
  ellipse(x2+size,y2,size/2,size/2)
  ellipse(x2+size,y2+size*2,size/2,size/2)
  ellipse(x2+size*2,y2+size,size/2,size/2)
  ellipse(x2,y2+size,size/4,size/4)
  ellipse(x2+size,y2,size/4,size/4)
  ellipse(x2+size,y2+size*2,size/4,size/4)
  ellipse(x2+size*2,y2+size,size/4,size/4)
//displaying points
fill(255)
textSize(20)
text('Score',40,30)
text(score,40,50)
fill(0)
//prevent the player from leaving the screen
//top border
if (y1 <= 0) {
  y1 =y1+sp4
  //end of if statment
}
//bottom border
else if (y1+size >= height+50) {
  y1 =y1-sp4
  //end of if statment
}
//left border
if (x1 <= 0) {
  x1 =x1+sp3
  //end of if statment
}
//right border
else if (x1+size >= width+50) {
  x1 =x1-sp3
  //end of if statment
}
//diffulcty curve
if (score === df) {
  //increasing the enemys speed
  sp1 = sp1*1.2
  sp2 = sp1*1.2
  //reseting the difuculty curve statment
  df = df+10
  print(sp1)
  //end of if statment
}
//end of else statment for gameover
}
//end of else if statment for instruction screen
}
// end of draw function
}
//movement functions
function leftright() {
  if (keyIsDown(LEFT_ARROW)) {
    x1 = x1-sp3
    //end of if statment
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    x1 = x1+sp3
    //end of else if statment
  }
//end of leftright function
}
function updown() {
  if (keyIsDown(UP_ARROW)) {
    y1 = y1-sp4
    //end of if statment
  }
  else if (keyIsDown(DOWN_ARROW)) {
    y1 = y1+sp4
    //end of else if statment
  }
//end of updown function
}
