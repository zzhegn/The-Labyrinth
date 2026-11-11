function setupGoblinRoom() {
GoblinRoom.walls=new Group();

GoblinRoom.addWalls(300,595,1000,100);
GoblinRoom.addWalls(690,5,500,100);
GoblinRoom.addWalls(795,300,100,600);
GoblinRoom.addWalls(0,180,110,500);
GoblinRoom.addWalls(0,0,720,110);
GoblinRoom.addWalls(8,560,100,100);
GoblinRoom.addWalls(0,height/1.3,30,100);
GoblinRoom.addWalls(width/2,0,80,40);


GoblinRoom.addDoor(width/2,30,startroom,width/2,500);
  
GoblinRoom.addDoor(30,height/1.3,MazeRoom,750,height/2);  
}
