function setupBridgeRoom() {

 BridgeRoom.walls=new Group();
 
 BridgeRoom.addWalls(750,200,100,800);
 BridgeRoom.addWalls(-10,height/2,100,800);
 BridgeRoom.addWalls(180,600,350,100);
 BridgeRoom.addWalls(630,600,350,100);
 BridgeRoom.addWalls(180,0,350,100);
 BridgeRoom.addWalls(630,0,350,100);
 BridgeRoom.addWalls(635,70,350,40);
 BridgeRoom.addWalls(180,35,350,20);
 BridgeRoom.addWalls(300,540,60,100);
 BridgeRoom.addWalls(190,530,350,50);
 BridgeRoom.addWalls(120,500,70,30);
 BridgeRoom.addWalls(215,465,55,80);
 BridgeRoom.addWalls(210,420,15,30);
 BridgeRoom.addWalls(45,455,20,100);
 BridgeRoom.addWalls(85,430,60,50);
 BridgeRoom.addWalls(100,410,30,50);
 BridgeRoom.addWalls(45,370,20,10);
 BridgeRoom.addWalls(65,285,80,75);
 BridgeRoom.addWalls(130,260,50,25);
 BridgeRoom.addWalls(50,175,45,250);
BridgeRoom.addWalls(90,200,45,35);
BridgeRoom.addWalls(90,80,45,105);
BridgeRoom.addWalls(150,140,50,30);
BridgeRoom.addWalls(100,70,40,40);
BridgeRoom.addWalls(230,60,250,30);
BridgeRoom.addWalls(140,55,30,80);
BridgeRoom.addWalls(250,90,50,50);
BridgeRoom.addWalls(260,130,30,30);
BridgeRoom.addWalls(250,160,45,30);
BridgeRoom.addWalls(320,90,150,10);
BridgeRoom.addWalls(620,100,300,25);
BridgeRoom.addWalls(680,130,100,40);
BridgeRoom.addWalls(680,170,100,200);
BridgeRoom.addWalls(220,300,70,70);
BridgeRoom.addWalls(220,255,30,20);
BridgeRoom.addWalls(width/2,360,180,25);
BridgeRoom.addWalls(420,390,150,40);
BridgeRoom.addWalls(380,345,100,40);
BridgeRoom.addWalls(380,310,30,45);
BridgeRoom.addWalls(495,380,40,30);
BridgeRoom.addWalls(580,550,250,50);
BridgeRoom.addWalls(520,530,100,50);
BridgeRoom.addWalls(520,500,30,30);
BridgeRoom.addWalls(570,485,15,80);
BridgeRoom.addWalls(430,520,5,35);
BridgeRoom.addWalls(450,532,30,13);
BridgeRoom.addWalls(620,510,30,50);
BridgeRoom.addWalls(670,520,80,25);
BridgeRoom.addWalls(690,515,10,100);
BridgeRoom.addWalls(680,300,60,180);
BridgeRoom.addWalls(680,370,30,80);
BridgeRoom.addWalls(560,280,110,30);
BridgeRoom.addWalls(580,300,30,30);
BridgeRoom.addWalls(620,260,30,30);
BridgeRoom.addWalls(620,130,30,40);
BridgeRoom.addWalls(420,200,60,60);
BridgeRoom.addWalls(500,200,100,30);
BridgeRoom.addWalls(530,180,50,20);
BridgeRoom.addWalls(380,210,30,40);
BridgeRoom.addWalls(360,200,20,30);
BridgeRoom.addWalls(340,200,30,30);
BridgeRoom.addWalls(330,180,10,70);
BridgeRoom.addWalls(320,230,30,50);
BridgeRoom.addWalls(640,340,30,30);


BridgeRoom.addDoor(width/2,0,EscapeDungeon,width/2,750); 
BridgeRoom.addDoor(width/2,580,startroom,width/2,50); 

}
