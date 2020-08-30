var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var distance2=0;
var database;
var highscore;
var GamesPlayed=0;
var t=0;
//var k=50;
var x,y,i=-2460,j,k=1;
var form, player, game;
//var GamesPlayed=player.GetGamesPlayed();
var SinglePlayer,singlecar,S,SinglePlayerDis=0,SinglePlayerDis2=0;

var cars, car1, car2, car3, car4;
//var dis1,dis2,dis3,dis4;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
   clear();
    game.MPplay();
  }
  if(gameState === 2){
    game.end();
  }
  if(gameState==3)
  {
    game.SPplay();
    /*if(t==0)
    {
    GamesPlayed+=1;
    player.updateGamesPlayed(GamesPlayed);
    console.log(GamesPlayed);
    }
    t=t+1;*/
  }
}
