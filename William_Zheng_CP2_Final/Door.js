class Door{
  constructor(x,y,targetRoom, spawnX, spawnY){
    this.x=x;
    this.y=y;
    this.targetRoom=targetRoom;
    this.spawnX=spawnX;
    this.spawnY=spawnY;
    this.size=30;
  }
  
  draw(){
    fill(0,200,0,0);
    noStroke();
    rect(this.x-10,this.y,this.size,this.size)
  }
  
  check(playerSprite){
    let d=dist(playerSprite.position.x,playerSprite.position.y,this.x,this.y);
    
    if (d<this.size){
      currentRoom=this.targetRoom;
      playerSprite.position.x=this.spawnX;
      playerSprite.position.y=this.spawnY;
      
    if (currentRoom==GoblinRoom){
      setupGoblinRoom()
      console.log('goblinroom')
    }
    else if (currentRoom==startroom){
      console.log('startroom')
    }
    else if (currentRoom==PuzzleRoom){
      setupPuzzleRoom()
      console.log('puzzleroom')
    } 
    else if (currentRoom==EmptyRoom1){
      setupEmptyRoom1()
      console.log('emptyRoom1')
    } 
    else if (currentRoom==BridgeRoom){
      setupBridgeRoom()
      console.log('bridgeroom')
    } 
    else if (currentRoom==MazeRoom){
      setupMazeRoom()
      console.log('mazeroom')
    }
    else if (currentRoom==EscapeDungeon){
      console.log('heyyyy')
    }
    else if (currentRoom==EmptyRoom2){
      setupEmptyRoom2()
      console.log('emptyRoom2')
    }
    else if (currentRoom==TreasureEnd){
    setupTreasureEnd()
    console.log('treasureend')
    }
    else if (currentRoom==End){
    console.log('end')
    }
    else if (currentRoom==Death){
    setupDeathRoom();
    }
    }
  }
}