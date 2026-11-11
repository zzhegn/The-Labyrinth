   
function setupEmptyRoom1() {
EmptyRoom1.walls=new Group();

EmptyRoom1.addWalls(770,height/2,50,800);
EmptyRoom1.addWalls(30,height/2,50,800);
EmptyRoom1.addWalls(110,575,500,60);
EmptyRoom1.addWalls(690,575,500,60);
EmptyRoom1.addWalls(110,25,500,60);
EmptyRoom1.addWalls(690,25,500,60);

EmptyRoom1.addDoor(width/2,30,PuzzleRoom,width/2,500);  
  
EmptyRoom1.addDoor(width/2,550,MazeRoom,width/2,80);
}
