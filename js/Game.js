class Game {
  constructor(){
//var GamesPlayed=GamesPlayed+1;

  }
  
 SPplay()
 {
  form.hide();
  background(rgb(198,135,103));
  image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
  //fill("red");
  //ellipse(x,y,60,60); singlecar.shapeColor = "red";
if(singlecar.x==6980)
  {
    singlecar.x=680;
  }
  camera.position.x = displayWidth/2;//singlecar.x;
  
  //k++;
  camera.position.y = singlecar.y;
  player.SingleplayergetDis();
  //singlecar.y=SinglePlayerDis-50;

  
  if(keyIsDown(UP_ARROW)){
   // S.distance+=5;
     singlecar.y=SinglePlayerDis-100;
  }
 if(keyIsDown(DOWN_ARROW) ){
    // S.distance+=5;
     singlecar.y=SinglePlayerDis+30;
   }
   
   player.SingleplayergetDis2();
   
   if(keyIsDown(LEFT_ARROW)){
    // S.distance+=5;
    //singlecar.y=SinglePlayerDis-5;
      singlecar.x=SinglePlayerDis2-5;
   }
   if(keyIsDown(RIGHT_ARROW)){
    // S.distance+=5;
   // singlecar.y=SinglePlayerDis-5;
      singlecar.x=SinglePlayerDis2+5;
   }
   /*
   if(World.mouseX>displayWidth/2)
   {
    singlecar.x=SinglePlayerDis2+5;
   }
   if(World.mouseX<displayWidth/2){
    singlecar.x=SinglePlayerDis2-5;
   }
*/
   //console.log()
   camera.position.x = singlecar.x;
   camera.position.y = singlecar.y;
   player.SingleplayerupdateDis(singlecar.y);
   player.SingleplayerupdateDis2(singlecar.x);
 console.log(singlecar.y);

  for(j=0;j<k;j++)
  {
    if(singlecar.y<i-(1500*j))
  {
  image(track, 0,-displayHeight*4+(i-(1500*j)+1000),displayWidth, displayHeight*5);
  k++;
  }
  //console.log(singlecar.x);//305,1065
  }
  if(singlecar.x<=305)
  {
    singlecar.x=305;
  }
  if(singlecar.x>=1065)
  {
    singlecar.x=1065;
  }
  
  if(singlecar.y>720)
  {
    singlecar.y=720;
  }
  /*
 //console.log(i);
  if(singlecar.y<i)
  {
  image(track, 0,-displayHeight*4+(i+1000),displayWidth, displayHeight*5);
  //i=-4020;
  }
  if(singlecar.y<i-1500)
  {
  image(track, 0,-displayHeight*4+(i-1500+1000),displayWidth, displayHeight*5);
  //i=-4020;
  }
  
 /*

 if(singlecar.y<-2460)
    {
image(track, 0,-displayHeight*4-1460,displayWidth, displayHeight*5);
    }
    /*
    if(singlecar.y<-4020)
    {
image(track, 0,-displayHeight*4-3020,displayWidth, displayHeight*5);
    } 
    if(singlecar.y<-5600)
    {
image(track, 0,-displayHeight*4-4600,displayWidth, displayHeight*5);
    } 
  */
  drawSprites();
 }
 
  

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }


  async start(){
    if(gameState === 0){
      player = new Player();
      S=new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
    
      singlecar = createSprite(6980,720);
    singlecar.addImage("car1",car1_img);
    car1 = createSprite(300,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(50,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(700,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(900,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];
  
      form = new Form()
      form.display();
    }
  }
MPplay(){
    
    form.hide();
    
    Player.getPlayerInfo();
    Player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index =0;
      //x and y position of the cars
      var x = 300;
      var y;
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        if(index<5)
        {
          
        //position the cars a little away from each other in x direction
        //x = x + 200;
        console.log(index);
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        x= displayHeight - allPlayers[plr].distance2;
     // console.log(allPlayers);
        cars[index-1].x = x;
        cars[index-1].y = y;

        if(cars[index-1]!== null)
          {
            if(cars[0].collided(cars[1]))
            {
              cars[0].x-=100;
            }
            /*
            if(cars[0].collided(cars[2]))
            cars[0].collided(cars[3]);
           // cars[0].collided(cars[]);

            cars[1].collided(cars[2]);
            cars[1].collided(cars[3]);

            cars[2].collided(cars[3]);*/
          }

       // console.log(index, player.index)
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
      }
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=40
      player.update();
    }   
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
       // S.distance+=5;
        // singlecar.y=SinglePlayerDis-40;
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance2 -=10
      player.update();
       // S.distance+=5;
        // singlecar.y=SinglePlayerDis-40;
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance2 +=10
      player.update();
       // S.distance+=5;
        // singlecar.y=SinglePlayerDis-40;
    }
   //player.SingleplayergetDis();

    // player.SingleplayergetDis2();
     /*
     if(keyIsDown(LEFT_ARROW)){
        cars[index-1].x=PlayerDis2-5;
     }
     if(keyIsDown(RIGHT_ARROW)){
        cars[index-1].x=PlayerDis2+5;
     }
     camera.position.x = cars[index-1].x;
     player.PlayerupdateDis2(cars[index-1].x);
  
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
       // S.distance+=5;
        // singlecar.y=SinglePlayerDis-40;
    }*/
    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
