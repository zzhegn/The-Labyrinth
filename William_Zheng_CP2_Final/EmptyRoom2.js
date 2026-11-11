
    
function setupEmptyRoom2() {
EmptyRoom2.walls=new Group();

EmptyRoom2.addWalls(width/2,575,800,60);
EmptyRoom2.addWalls(30,height/2,50,800);
EmptyRoom2.addWalls(110,25,500,60);
EmptyRoom2.addWalls(690,25,500,60);
EmptyRoom2.addWalls(770,115,50,300);
EmptyRoom2.addWalls(770,500,50,300);

EmptyRoom2.addDoor(width/2,0,MazeRoom,width/2,550); 
  
EmptyRoom2.addDoor(780,height/2,TreasureEnd,50,height/2);
}
