//I did use CHATGPT for help with debugging and some of the game mechanics but never more than a few lines of code.

let currentRoom;
let playerIdle;
let playerUP;
let playerDown;
let playerRight;
let playerLeft;
let playerSprite;

let SlimeSprite;
let SlimeIdle;
let SlimeUp;
let SlimeDown;
let SlimeLeft;
let SlimeRight;

let Statute;
let Mino;
let puzzle;
let puzzlesolved;

let Sroom;
let Proom;
let ProomSolved;
let Mroom;
let Groom;
let Eroom1;
let Eroom2;
let Broom;
let Droom;

let startroom;
let GoblinRoom;
let BridgeRoom;
let PuzzleRoom;
let MazeRoom;
let Death;
let EmptyRoom1;
let EmptyRoom2;
let End;
let EscapeDungeon;
let TreasureEnd;

let startscreen;
let story;
let starve;
let slimedeath;
let slimedeathroom;
let fell;
let timer=0;

let gameState=0;
let bgmusic;
let push;
let slimez;
let dead;
let wins;
let ends;
let endsound;
let winsound;


// let intro=0;

function preload(){
  soundFormats('mp3');

  // bgmusic=loadSound('EscapeDungeon.mp3');
  push=loadSound('PUSH.mp3');
  slimez=loadSound('SLIME.mp3');
  wins=loadImage('WIN.jpg');
  ends=loadImage('ESCAPE.jpg');
  endsound=loadSound('GAMEOVER.mp3');
  winsound=loadSound('END.mp3');


  // bgmusic=loadSound('DBG.mp3');
  startscreen=loadImage('DSTART.jpg');
  story=loadImage('DSTORY.jpg');
  starve=loadImage('STARVE.jpg');
  slimedeath=loadImage('SLIMEDEATH.jpg');
  fell=loadImage('FELL.jpg');


  Sroom=loadImage('DROOMS/SRoom.jpg');
  
  ProomSolved=loadImage('DROOMs/PRoom.jpg')

  Proom=loadImage('DROOMS/PRoom(Locked).jpg')
  Droom=loadImage('DROOMS/DeathRoom.jpg')
  Mroom=loadImage('DROOMS/MRoom.jpg');
  Groom=loadImage('DROOMS/GRoom.jpg');
  Eroom1=loadImage('DROOMS/ERoom1.jpg');
  Eroom2=loadImage('DROOMS/ERoom2.jpg');
  Broom=loadImage('DROOMS/BRoom.jpg');

  Statute=loadAnimation('MINO-STATUTE.png')

  SlimeIdle= loadAnimation("SlimeSprites/IDLE/IDLE1.png","SlimeSprites/IDLE/IDLE2.png",
    "SlimeSprites/IDLE/IDLE3.png","SlimeSprites/IDLE/IDLE4.png","SlimeSprites/IDLE/IDLE5.png")

  SlimeUp= loadAnimation("SlimeSprites/UP/UP1.png","SlimeSprites/UP/UP2.png","SlimeSprites/UP/UP3.png")

  SlimeLeft= loadAnimation("SlimeSprites/LEFT/LEFT1.png","SlimeSprites/LEFT/LEFT2.png","SlimeSprites/LEFT/LEFT3.png","SlimeSprites/LEFT/LEFT4.png")

  SlimeRight= loadAnimation("SlimeSprites/RIGHT/RIGHT1.png","SlimeSprites/RIGHT/RIGHT2.png","SlimeSprites/RIGHT/RIGHT3.png","SlimeSprites/RIGHT/RIGHT4.png")

  SlimeDown= loadAnimation("SlimeSprites/DOWN/DOWN1.png","SlimeSprites/DOWN/DOWN2.png","SlimeSprites/DOWN/DOWN3.png")
  
  playerUP= loadAnimation("Sprites/UP/UP1.png","Sprites/UP/UP2.png","Sprites/UP/UP3.png","Sprites/UP/UP4.png")
  
  playerDown=loadAnimation("Sprites/DOWN/Down1.png","Sprites/DOWN/Down2.png","Sprites/DOWN/Down3.png","Sprites/DOWN/Down4.png")
  
  playerLeft=loadAnimation("Sprites/LEFT/Left1.png","Sprites/LEFT/Left2.png","Sprites/LEFT/Left3.png","Sprites/LEFT/Left4.png")
  
  playerRight=loadAnimation("Sprites/RIGHT/Right1.png","Sprites/RIGHT/Right2.png","Sprites/RIGHT/Right3.png","Sprites/RIGHT/Right4.png")
  
  playerIdle=loadAnimation("Sprites/IDLE/Idle1.png","Sprites/IDLE/Idle2.png","Sprites/IDLE/Idle3.png","Sprites/IDLE/Idle4.png","Sprites/IDLE/Idle4.png","Sprites/IDLE/Idle4.png")

}


function setup() {
  createCanvas(800, 600);
  
  slimedeathroom=new Room(slimedeath,0,0);
  startroom=new Room(Sroom,0,0);
  GoblinRoom= new Room(Groom,0,0);
  BridgeRoom= new Room(Broom,0,0);
  PuzzleRoom= new Room(Proom,0,0);
  MazeRoom= new Room(Mroom,0,0);
  Death= new Room(Droom,0,0);
  EmptyRoom1= new Room(Eroom1,0,0);
  EmptyRoom2= new Room(Eroom2,0,0);
  End= new Room(Eroom1,0,0);
  EscapeDungeon= new Room(Eroom1,0,0);
  TreasureEnd= new Room(Eroom1,0,0);
  
  currentRoom=startroom;
  setupstartroom();

  // currentRoom=EmptyRoom1;
  // setupEmptyRoom1();

  // currentRoom=Death;
  // setupDeathRoom();

  frameRate(24);  

  Mino=createSprite(width/2,height/2);
  Mino.addAnimation('idle',Statute);
  Mino.scale=0.3;

  SlimeSprite=createSprite(random(300,500),random(200,300),10,10);
  SlimeSprite.addAnimation('up',SlimeUp);
  SlimeSprite.addAnimation('down',SlimeDown);
  SlimeSprite.addAnimation('right',SlimeRight);
  SlimeSprite.addAnimation('left',SlimeLeft);

  SlimeSprite.scale=0.5;
  
  playerSprite=createSprite(width/2,height/2,10,10);
  playerSprite.scale=0.15

  playerSprite.addAnimation("up",playerUP);
  playerSprite.addAnimation("down",playerDown);
  playerSprite.addAnimation("right",playerRight);
  playerSprite.addAnimation("left",playerLeft);
  playerSprite.addAnimation("idle",playerIdle);

  puzzle=createSprite(640,320,30,30);
}

function draw() { 
  
  
  if (gameState==0){
    StartScreen();
  }
  else if (gameState==1){
    Story();
  }
  else if(gameState==3){
    image(slimedeath,0,0,width,height);
  }
  else if (gameState==4){
    image(fell,0,0,width,height);
  }
  else if (gameState==5){
    image(starve,0,0,width,height);
  }
  else if (gameState==6){
    image(wins,0,0,width,height);
  }
  else if (gameState==7){
    image(ends,0,0,width,height);
  }


  if (gameState==2){
    
  PlayerMovement();
  drawSprites(currentRoom.walls);
  currentRoom.display();
  drawSprite(playerSprite);
  
  if (currentRoom==GoblinRoom){
  drawSprite(SlimeSprite);
  SlimeSprite.collide(currentRoom.walls);  
  SlimeMovement();
  SlimeSprite.setCollider("rectangle",0,0,100,100);
  SlimeSprite.attractionPoint(
    0.2,
    playerSprite.position.x,
    playerSprite.position.y
  );

  if (dist(playerSprite.position.x,playerSprite.position.y,SlimeSprite.position.x,SlimeSprite.position.y)<30){
    console.log('hit');
    SlimeDeath();
  }

  if (SlimeSprite.collide(currentRoom.walls)==true){
    SlimeSprite.velocity.x=0;
    SlimeSprite.velocity.y=0;
    slimez.play();
  }

  }

  if (currentRoom==PuzzleRoom){
  drawSprite(puzzle);
  puzzle.setCollider("rectangle",0,0,20,20);
  currentRoom.display();

    if (playerSprite.position.y>Mino.position.y){
       drawSprite(Mino);
       drawSprite(playerSprite);
    }
    else{
      drawSprite(playerSprite);
       drawSprite(Mino);
    }

    Mino.setCollider("rectangle",0,0,30,30);
    console.log(Mino.friction);
    Mino.collide(currentRoom.walls);

    Mino.velocity.x=0;
    Mino.velocity.y=0;

    Mino.overlap(puzzle);

    if (Mino.overlap(puzzle)==true){
        console.log('work')
        currentRoom.img=ProomSolved;
        PuzzleRoom.addDoor(width/2,530,EmptyRoom1,width/2,80);
    }

    if (playerSprite.collide(Mino)){
      if (playerSprite.velocity.x>0){
        Mino.velocity.x+=2.5;
        push.play();
      }
      else if (playerSprite.velocity.x<0){
        Mino.velocity.x=-2.5;
        push.play();
      }
      else if (playerSprite.velocity.y>0){
        Mino.velocity.y+=2.5;
        push.play();
      }
      else if (playerSprite.velocity.y<0){
        Mino.velocity.y=-2.5;
        push.play();
      }
    }

    console.log(playerSprite.velocity.x, "x");
    console.log(playerSprite.velocity.y, "y");

    console.log(Mino.velocity.x);
    console.log(Mino.velocity.y);
  }
  
  for (let door of currentRoom.doors){
    door.draw();
    door.check(playerSprite);
  }
  
  

  if (currentRoom==BridgeRoom){
  playerSprite.overlap(currentRoom.walls);
  playerSprite.setCollider("rectangle",0,0,10,10);
  if (playerSprite.overlap(currentRoom.walls)==true){
    felldeath();
  }
  }
  else{
    playerSprite.collide(currentRoom.walls); 
  }


  if (currentRoom==MazeRoom){
  blendMode(OVERLAY);
  fill(0,0,0,210);
  rect(0,0,800,600);


  blendMode(SCREEN);
  fill(255,255,255,30)
  ellipse(playerSprite.position.x,playerSprite.position.y,100,100);

  drawSprite(playerSprite);
  }
  
  if (currentRoom==Death){
    timer++
    if (timer>720){
      starved()
      console.log(timer);
    }
  }
  if (currentRoom==TreasureEnd){
    ENDS();
  }

  if (currentRoom==EscapeDungeon){
    Escape();
  }
}

// console.log(frameCount)

  // console.log(playerSprite.position.x,playerSprite.position.y);
}

function mousePressed(){
  // console.log(intro);
  gameState+=1
  if (gameState>2){
    gameState=2;
  }
}

function StartScreen(){
  image(startscreen,0,0,width,height+1);
  // text('[start screen]',width/2,height/2)
}

function Story(){
  image(story,0,0,width,height);
  // text('[story]',width/2,height/2)
}

function SlimeDeath(){
  // sprites.remove();
  // currentRoom=slimedeathroom;
  gameState=3;
  slimez.play();
  // currentRoom.img(slimedeath,0,0,width,height);
  // setupSlimeDeath();
  keyPressed();
}

function felldeath(){
  gameState=4;
  keyPressed();
  dead.play();
}

function starved(){
  gameState=5;
  keyPressed();
  dead.play();
}

function ENDS(){
  gameState=6;
  keyPressed();
  winsound.play();
}

function Escape(){
  gameState=7;
  endsound.play();
}

function keyPressed(){
  if (key ==="r"){
    gameState=0;
    console.log(gameState);
    setup()
    // currentRoom=startroom;

    // console.log(intro)
  }
}