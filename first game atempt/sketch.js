/*
Sebastian Folch
April 11, 2019

Link http://localhost/p5/first game atempt
*/
let x1 = 0
let x2 = 400
let y1 = 0
let y2 = 200
let size = 50
let sp1 = 5
let sp2 = -5
let sp3 = 3
let sp4 = 3
var sound
var sound2
let hit = false
let score = 0
let p = false
var img


function preload() {
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
//gameover
if (hit) {
  fill(255,0,0)
  rect(0,0,width,height)
  fill(255)
  textSize(70)
  text('Game Over',width/2-width/4,height/2)
  textSize(32)
  text('Hit enter to retry',width/2-width/4,height/2+height/4)
  text(score,width/2,height/2+height/8-height/4*2)
  sound2.playMode('untilDone')
  if (p) {
  //reseting the game
if (keyCode === ENTER) {
  x2 = 400
  x1 = 100
  y1 = 100
  y2 = 300
  hit = false
  score = 0
  p = false
}
    }
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
  image(img,0,0,800,600)
  hit = collideRectCircle(x2,y2,size*2,size*2,x1,y1,size,size)

  //movement
  leftright()
  updown()
  // player design

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
  //enemy movement
  if (x2 <= 0 || x2+size*2 >= width) {
    sp1 =-sp1
    //increasing score
    score = score+1
    sound.play()
  }
  if (y2 <= 0 || y2+size*2 >= height) {
    sp2 =-sp2
    //increasing score
    score= score+1
    sound.play()
  }
  x2 = x2+sp1
  y2 = y2+sp2
  //enemy design
  noFill()
  rect(x2,y2,size*2,size*2)
  fill(188)
  rect(x2,y2,size*2,size/4)
  rect(x2,y2,size/4,size*2)
  rect(x2+size*2-size/4,y2,size/4,size*2)
  rect(x2,y2+size*2-size/4,size*2,size/4)
  rect(x2,y2+size,size*2,size/4)
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

}
//bottom border
else if (y1+size >= height+50) {
  y1 =y1-sp4

}
//left border
if (x1 <= 0) {
  x1 =x1+sp3

}
//right border
else if (x1+size >= width+50) {
  x1 =x1-sp3

}
}
}
//movement functions
function leftright() {
  if (keyCode === LEFT_ARROW) {
    x1 = x1-sp3
  }
  else if (keyCode === RIGHT_ARROW) {
    x1 = x1+sp3
  }
}
function updown() {
  if (keyCode === UP_ARROW) {
    y1 = y1-sp4
  }
  else if (keyCode === DOWN_ARROW) {
    y1 = y1+sp4
  }
}
