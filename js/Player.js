class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.distance2=0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
      
    });
  }
  SingleplayerupdateCount(count){
    console.log(count);
    database.ref('/').update({
      SinglePlayer: count
    });
  }
  SinglePlayergetCount(){
    var SinglePlayerRef = database.ref('SinglePlayer');
    SinglePlayerRef.on("value",(data)=>{
      SinglePlayer = data.val();
    })
  }
  SingleplayerupdateName(name){
    database.ref('/').update({
      SinglePlayerName: name
  });
}
SingleplayerupdateDis(distance){
  database.ref('/').update({
    SinglePlayerDis: distance
});
}
SingleplayerupdateDis2(distance){
  database.ref('/').update({
    SinglePlayerDis2: distance
});
}
SingleplayergetDis(){
  var SinglePlayerDisRef = database.ref('SinglePlayerDis');
  SinglePlayerDisRef.on("value",(data)=>{
    SinglePlayerDis= data.val();
  })
}
SingleplayergetDis2(){
  var SinglePlayerDis2Ref = database.ref('SinglePlayerDis2');
  SinglePlayerDis2Ref.on("value",(data)=>{
    SinglePlayerDis2= data.val();
  })
}

  updateGamesPlayed(count)
  {
    database.ref('/').update({
      GamesPlayed:count
  });
  }
  GetGamesPlayed()
  {
    database.ref('GamesPlayed').on("value",(data)=>{
      GamesPlayed = data.val();
    })
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      distance2:this.distance2
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  static getCarsAtEnd() {
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      CarsAtEnd:rank
    })
  }
}
