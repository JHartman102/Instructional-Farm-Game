let playerx = 55;
let playery = 80;
let time = 0;
let displaytime = 0;
let farmplots;
let xplots = 8;
let yplots = 8;
let score = 0;
function setup() {
  createCanvas(600, 600);
  let growstate = 0;
  player.resize(100,100);
  imageMode(CENTER);
  farmplots = new Array(xplots);
  for (var c = 0; c < farmplots.length; c++) {
    farmplots[c] = new Array(yplots);
  }
  //console.log(farmplots);
  for (var i = 0; i < xplots; i++) {
    for (var j = 0; j < yplots; j++) {
      farmplots[i][j] = new farmplot(55 + 70*i, 100 + 65*j);
    }
  }
}

function draw() {
  background(40,160,30);
  text("Time: " + displaytime, 50,50);
  text("Score: "+score,500,50);
  time = (time+1)%60;
  if(time==59) displaytime++;
    for(i=0;i < xplots; i++) {
      for(j=0;j < yplots;j++) {
        if((displaytime%1==0)&&(time==0)) {
        farmplots[i][j].grow();
        }
        farmplots[i][j].harvest();
        farmplots[i][j].drawPlot();
      }
    }
  // draw moving character
  image(player, playerx, playery);

  
}

function keyTyped() {
  if(key == 'w'){
     playery = playery - 65;
   }
  if(key == 's') {
    playery = playery + 65;
  }
  if(key == 'a') {
    playerx = playerx - 70;
  }
  if(key == 'd') {
    playerx = playerx + 70;
  }
  if(playerx<55) playerx = 55;
  if(playerx>(55+(xplots-1)*70)) playerx = 55+(xplots-1)*70;
  if(playery<80) playery = 80;
  if(playery>(80+ 65 * (yplots-1))) playery = 80+65*(yplots-1);
}
function preload(){
  growstate01 = loadImage("Sprites/Cropstate01.png");
  growstate02 = loadImage("Sprites/Cropstate02.png");
  growstate03 = loadImage("Sprites/Cropstate03.png");
  growstate04 = loadImage("Sprites/Cropstate04.png");
  growstate05 = loadImage("Sprites/Cropstate05.png");
  growstate06 = loadImage("Sprites/Cropstate06.png");
  growstate07 = loadImage("Sprites/Cropstate07.png");
  growstate = growstate01;
  player =loadImage("Sprites/Farmer-removebg-preview.png");
}