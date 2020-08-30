class Form {

  constructor() {
    this.input = createInput("Name");
    this.button1 = createButton("Single Player");
    this.button2=createButton("MultiPlayer");
    this.button3=createButton("Public match");
    this.button4=createButton("Private match");
    this.button5=createButton("Create lobby");
    this.button6=createButton("Join lobby");
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.reset = createButton('Reset');
    this.play=createButton("PLAY");
    this.greeting2=createElement('h2');
    this.score=createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
    this.input.hide();
    this.title.hide();
    this.play.hide();
    this.score.hide();
    this.greeting2.hide();
  }

  display(){
    this.title.html("Peak Hour");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button1.position(displayWidth/2 + 30, displayHeight/2);
    this.button2.position(displayWidth/2 + 30, displayHeight/2+20);
    this.reset.position(displayWidth-100,20);
    //this.button3.hide();
    //this.button4.hide();
    //this.button5.hide();
    //this.button6.hide();
    //this.play.hide();
    this.button2.mousePressed(()=>{
      this.button1.hide();
      this.input.hide();
      this.button2.hide();
      this.button3.position(displayWidth/2 + 30, displayHeight/2);
      this.button4.position(displayWidth/2 + 30, displayHeight/2+20);
     // this.score.hide();
      player.name = this.input.value();
      this.play.hide();
     // player.update();
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);

    });
    this.button4.mousePressed(()=>{
      playerCount+=1;
      player.index = playerCount;
      player.updateCount(playerCount);
      this.button4.hide();
      this.greeting.hide();
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
     this.greeting2.html("Number of Players Ready= " + playerCount);
     this.greeting2.position(displayWidth/2 -70, displayHeight/3);
      //this.button6.position(displayWidth/2 + 30, displayHeight/2+20);
      this.button3.hide();
      this.button6.hide();
      this.button5.hide();
      player.update();
      //this.score.hide();
      //this.button4.hide();
      //game.update(1);
    });

    this.button1.mousePressed(()=>{
      //player.SingleplayerupdateCount(1);\
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      player.name = this.input.value();
      this.button1.hide();
      this.input.hide();
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
      this.play.position(displayWidth/2 - 70, displayHeight/2);
      this.greeting.html("Welcome to the car racing game .Hello " + player.name)
      this.greeting.position(displayWidth/2 - 90, displayHeight/4);
      game.update(0);
      player.SingleplayerupdateName(player.name);
      console.log(player.name);
     
    });
    this.play.mousePressed(()=>{
     player.SingleplayerupdateCount(1);/*

     background(rgb(198,135,103));
  image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
     this.score.html("Score ="+player.SingleplayerupdateDis);
     this.score.position(displayWidth/2, displayHeight/4);*/
      game.update(3);
    })
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      player.SingleplayerupdateCount(0);
      player.SingleplayerupdateName("");
      player.SingleplayerupdateDis(0);
      player.SingleplayerupdateDis2();
    });


  }
}
