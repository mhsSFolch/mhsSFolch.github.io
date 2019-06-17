// sebastian folch
// june 4, 2019
//http://localhost:8080/p5/Sfolc1_Summative/
let x1 = 400
let y1 = 400
let size = 100
let shotx = 400
let shoty = 400
let recharge = 0
let pos = false
let dis = 0
let phealth = 15
let inv = 0

var hit1 = false
let x2 = 400
let y2 = 100
let ehealth = 40
let sp1 = 5
var hit2 = false
var hit3 = false
var hit4 = false
let ly = 81
let attack = 'none'
let ldis = 0
let enenergy = 0
var hit5 = false
var hit6 = false
let sdis = 100
let sx = 0
var hit7 = false
let bnumber = 0
let bx = 0
let by = 0
let targeting = 0
var hit8 = false
var hit9 = false
let mx = -120
let mdis = -120
var hit10 = false
var mf = true
var sf = true
let level = 0
//sprites
var pss
var psh
var esh
var lfs
var rfs
var ess
var ms
//music and sounds
var pfs
var efs
var bm
var bwf
var lf
var mes
function preload() {
  //loading in all the sprites
  pss = loadImage('Player Ship Sprite.png')
  psh = loadImage('player wepon sprite.png')
  esh = loadImage('enemy shot sprite.png')
  lfs = loadImage('left frigate.png')
  rfs = loadImage('right frigate.png')
  ess = loadImage('enemy ship sprite.png')
  ms = loadImage('Mine sprite.png')
  //loading all the sounds
  pfs = loadSound('player wepon firing.mp3')
  efs = loadSound('enemy shot fireing.mp3')
  bm = loadSound('Space Fighter Loop.mp3')
  bwf = loadSound('ball wepon firing.mp3')
  lf = loadSound('lazor firing.mp3')
  mes = loadSound('8-BIt-SFX_Explosion_01.mp3')
}
function setup() {
  // put setup code here
  createCanvas(800,800)
}

function draw() {
  print(recharge)
  //playing background music
  bm.playMode('untilDone')
  bm.play()
  //setting various things
  strokeWeight(0.5)
  background(0)
  fill(0)
// starting screen
if (level === 0) {
  fill(0)
  rect(0,0,width,height)
    fill(255)
    textStyle(BOLDITALIC)
  textSize(100)
  text('Star Escape',150,100)
  textStyle(NORMAL)
  textSize(12)
  text('Controls:\nArrow Keys to move.\nSpace to fire.',650,700)
  textSize(20)
  text('Hit Enter to Begin',350,300)
  image(pss,400,400,size/4*3,size)
  if (keyIsDown(ENTER)) {
    level = 1
  }
}
else if (level === 1) {
  //Win screen
  if (ehealth <= 0) {
    fill(0,255,0)
    rect(0,0,width,height)
    fill(0)
    textSize(50)
    text('You Win!',width/2-200,height/2)
    textSize(25)
    text('You managed to destroy the pirate ship and escape', width/2-200,height/2-100)
    textSize(12)
    text('To play agein hit Enter',width/2-100,height/2-200)
    reset()
  }
  else {
//gameover screen
if (phealth <= 0) {
  //gameover screen #1
  fill(255,0,0)
  rect(0,0,width,height)
    fill(0)
    textSize(50)
    text('Game Over \nYour ship was destroyed.', width/2-200,height/2)
    textSize(12)
    text('hit enter to retry.',300,500)
  reset()
  textSize(12)
}
else {
    //first attack
    if (attack === 'none') {
      attack = random(['lasor','mine','shot','barrage','shot','mine'])//selecting a new attack
      print(attack)
    }
  //movement
  leftright()
  updown()
  //shooting for the player
  rect(shotx,shoty,size/10,size/10)
  //placeing the sprite
  image(psh,shotx,shoty,size/10,size/10)
  //character hitbox
  rect(x1,y1,size/4*3,size)
  //placeing the sprite
  image(pss,x1,y1,size/4*3,size)
  //player wepon recharge check
  if (recharge === 100) {
    if (keyIsDown(32)) {
      //fireing
      if (pos) {
        shoty = shoty-12
        dis = dis+1
        //makeing the sound
        if (dis < 4) {
        pfs.playMode('untilDone')
        pfs.play()
        pfs.pause(1)
      }
      }
      }
    else {
      //keeping the shot with the player
    shotx = x1+size/4*3/2-size/10
    shoty = y1 + 40
    pos = true
    }
  }
  else {
    //moveing the shot
    recharge = recharge + 1
    shotx = -120
    shoty = -120
    pos = true
  }
  //reseting the player wepon
  if (dis === 100) {
    recharge = recharge-100
    dis = 0
    pos = false
  }
  if (hit1) {
    recharge = recharge-100
    dis = 0
    pos = false
  }
  // enemy ship hitbox
  rect(x2,y2,size/4*3,size)
  // placing the sprite
  image(ess,x2,y2,size/4*3,size)
  //check to see if the player hit the enemy
  hit1 = collideRectRect(shotx,shoty,size/10,size/10,x2,y2,size/4*3,size)
  //enemy health
  if (hit1) {
    ehealth = ehealth-1
  }
  fill(255,0,0)
  rect(200,0,ehealth*10,height/26)
  fill(0)
  textSize(12)
  text('Enemy Health',200,20)
  //enemy movement
  if (x2 <= 100 || x2+size/4*3 >= 700) {
    sp1 = -sp1
  }
  x2 = x2+sp1

  //wall hitboxes
  rect(0,0,100,height)
  rect(700,0,100,height)
  //placeing the sprites
  image(lfs,0,0)
  image(rfs,width-145.769,0)
  //wall colision
  if (inv > 60) {
  hit2 = collideRectRect(x1,y1,size/4*3,size,0,0,100,height)
  hit3 = collideRectRect(x1,y1,size/4*3,size,700,0,100,height)
}
  //damageing the player for hitting a wall
  if (hit2 || hit3) {
    phealth = phealth-0.5
    inv = 0
    hit2 = false
    hit3 = false
  }
  inv = inv + 1
  fill(0,255,0)
  rect(300,700,phealth*20,height/26)
  fill(0)
  text('Health',310,720)
  //enemy lasor attack
  if (attack === 'lasor' && enenergy >= 100) {
    //ending the attack
    if (ldis >= 370) {
      ly = 81
      enenergy = enenergy-75
      attack = random(['lasor','mine','shot','barrage','shot','mine'])//selecting a new attack
      ldis = 0
      print(attack)
    }
    //preforming the attack
    if(ldis<= 370) {
    strokeWeight(10)
    stroke(80,0,80)
    line(139,81,width,ly)
    line(width-139,81,0,ly)
    //playing sound
    lf.playMode('untilDone')
    lf.play()
    stroke(0)
    strokeWeight(0.5)
    ly = ly +6
    ldis = ldis + 2
    //reseting attack if it hits
    if (hit5 || hit6) {
      ldis = 370
      phealth = phealth-0.5
      hit5 = false
      hit6 = false
      //removeing the health
      print(phealth)
    }
    // checking it attack hits
    hit5 = collideLineRect(100,81,width,ly,x1,y1,size/4*3,size)
    hit6 = collideLineRect(700,81,0,ly,x1,y1,size/4*3,size)
      }
  }
  //enemy fighter shot attack
  //shot hitbox
rect(sx,sdis,size/10,size/10)
//placeing the sprite
image(esh,sx,sdis,size/10,size/10)
if (attack === 'shot' && enenergy >= 100 && sf) {
  //moveing shot into position
  sx = x2+size/4*3/2-size/10
  sdis = 100
  //getting new attack going
  enenergy = enenergy - 30
  attack = random(['lasor','mine','barrage','mine'])//selecting a new attack
  print(attack)
  //playing the sound
  efs.playMode('untilDone')
  efs.play()
  efs.pause(1)
  // preventing attack form being called agein until done
  sf = false
}
//moveing shot off screen if not in use
else if (sdis >= 800 || sdis <= 0) {
  sx = -120
  sdis =-120
  sf = true
}
// moveing the shot
  if (sdis <= 800) {
    sdis = sdis +4
    //player damage
    if (hit7) {
      hit7 = false
      sdis = 900
      phealth = phealth -1
      print(phealth)
    }
    //selecting a new attack if shot is not done
    if (attack === 'shot' && sf === false) {
      attack = random(['lasor','mine','barrage','mine'])//selecting a new attack
    }
    //checking if the shot hits
    hit7 = collideRectRect(x1,y1,size/4*3,size,sx,sdis,size/10,size/10)
  }

//enemy barrage attack
if (attack === 'barrage' && enenergy >= 100) {
  //ending the attack
  if (bnumber === 3) {
    bnumber = 0
    enenergy = enenergy - 50
    attack = random(['lasor','mine','shot','barrage','shot','mine'])//selecting a new attack
    print(attack)
  }
  if (bnumber <= 2) {
    print(targeting)
    //actual attack
    if (targeting >= 60) {
      strokeWeight(5)
      stroke(100,0,100)
    line(100,257,bx,by)
    line(700,257,bx,by)
    stroke(0)
    strokeWeight(0.5)
    hit8 = collideLineRect(100,257,bx,by,x1,y1,size/4*3,size)
    hit9 = collideLineRect(700,257,bx,by,x1,y1,size/4*3,size)
    //playing the sound
    bwf.playMode('untilDone')
    bwf.play()
    }
    //aiming
    if (targeting <= 20) {
      bx = x1+size/4*3/2
      by = y1+size/2
    }
    //warning the player of where the barrage is aiming
    if (targeting <= 37) {
      fill(255,0,0)
      ellipseMode(CENTER)
      ellipse(bx,by,30,30)
      fill(0)
    }
    //increasing targeting
    if (targeting <= 84) {
      targeting = targeting + 1
    }
    //checking it the player is hit
    if (hit8 || hit9) {
      targeting = 85
      phealth = phealth - 1
      hit8 = false
      hit9 = false
    }
    //ending a round of barrage
    if (targeting >= 65) {
      targeting = 0
      bnumber = bnumber + 1
    }
  }
}
//enemy fighter mine attack
//mine detection area
ellipseMode(CENTER)
ellipse(mx,mdis,size,size)
//placeing the sprite
image(ms,mx-size/2,mdis-size/2)
//starting the attack
if (attack === 'mine' && enenergy >= 100 && mf === true) {
  //moveing the mine into position
  mx = x2 + size/4*3/2
  mdis = 100
  //getting a new attack going
    enenergy = enenergy - 50
    attack = random(['lasor','shot','barrage','shot'])//selecting a new attack
    print(attack)
    // preventing this attack from being used until its done
    mf = false
  }
//getting the mine off the screen when not in use
else if (mdis >= 900 || mdis <= 0) {
  mdis = -120
  mx = -120
  mf = true
}
//moveing the mine
mdis = mdis + 2
//player damage
if (hit10) {
  hit10 = false
  mdis = 900
  phealth = phealth -1
  print(phealth)
  mes.playMode('untilDone')
  mes.play()
}
//checking if the mine hits
hit10 = collideRectCircle(x1,y1,size/4*3,size,mx,mdis,size,size)
//scelecting a diffrent attack if mine isnt finished
if (attack === 'mine' && mf === false) {
  attack = random(['lasor','shot','barrage','shot'])//selecting a new attack
}

  //enemy energy recharge
  if (enenergy < 100) {
  enenergy = enenergy + 1
  }
  //increasing difficulty half way through
  if (ehealth <= 20) {
    enenergy = enenergy + 1
  }
  //preventing the player from leaveing the screen
  if (y1+size >= 800) {
    y1 = 800-size
  }
  if (y1 <= 0) {
    y1 = 0
  }
}
}
}
}

//movement functions
function leftright() {
  if (keyIsDown(LEFT_ARROW)){
    x1 = x1-5
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    x1 = x1+5
  }
}

function updown() {
  if (keyIsDown(UP_ARROW)) {
    y1 = y1-5
  }
  else if (keyIsDown(DOWN_ARROW)) {
    y1 = y1+5
  }
}
//reseting the player wepon if they let go of space
function keyReleased() {
  if (keyCode === 32 && recharge === 100) {
  recharge = recharge-100
  dis = 0
  pos = false
  }
}
//reseting the game function
function reset() {
  if (keyIsDown(ENTER)) {
     x1 = 400
     y1 = 400
     size = 100
     shotx = 400
     shoty = 400
     recharge = 0
     pos = false
     dis = 0
     phealth = 15
     inv = 0

     hit1 = false
     x2 = 400
     y2 = 100
     ehealth = 40
     sp1 = 5
     hit2 = false
     hit3 = false
     hit4 = false
     ly = 81
     attack = 'none'
     ldis = 0
     enenergy = 0
     hit5 = false
     hit6 = false
     sdis = 100
     sx = 0
     hit7 = false
     bnumber = 0
     bx = 0
     by = 0
     targeting = 0
     hit8 = false
     hit9 = false
     mx = -120
     mdis = -120
     hit10 = false
     mf = true
     sf = true
  }
}
