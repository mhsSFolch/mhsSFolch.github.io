/*
sebastian folch
april 11 2019
*/
let x1 = 0
let x2 = 400
let y1 = 0
let y2 = 200
let size = 50
let sp1 = 5
let sp2 = -5
var sound;
let hit = false



function preload() {
  sound = loadSound('./basic_tone.wav');
}

function setup() {
  // put setup code here
  createCanvas(800,600)
}

function draw() {
  // put drawing code here
  background(0)
  hit = collideRectCircle(x2,y2,size*2,size*2,x1,y1,size,size)

  //movement
  leftright()
  updown()
  // player
  ellipse(x1,y1,size,size)
  //enemy movement
  if (x2 <= 0 || x2+size*2 >= width) {
    sp1 =-sp1
    sound.play()
  }
  if (y2 <= 0 || y2+size*2 >= height) {
    sp2 =-sp2
    sound.play()
  }
  x2 = x2+sp1
  y2 = y2+sp2
  //enemy
  rect(x2,y2,size*2,size*2)
  print(hit)
}

//movement functions
function leftright() {
  if (keyCode === LEFT_ARROW) {
    x1 = x1-3
  }
  else if (keyCode === RIGHT_ARROW) {
    x1 = x1+3
  }
}
function updown() {
  if (keyCode === UP_ARROW) {
    y1 = y1-3
  }
  else if (keyCode === DOWN_ARROW) {
    y1 = y1+3
  }
}
