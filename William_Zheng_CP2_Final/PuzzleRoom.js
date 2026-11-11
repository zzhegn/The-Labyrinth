  
function setupPuzzleRoom() {

PuzzleRoom.walls=new Group();   

PuzzleRoom.addWalls(width/2,5,800,100);
PuzzleRoom.addWalls(795,height/2,100,800);
PuzzleRoom.addWalls(110,695,500,300);
PuzzleRoom.addWalls(690,695,500,300);
PuzzleRoom.addWalls(0,110,110,300);
PuzzleRoom.addWalls(0,485,110,300);

PuzzleRoom.addDoor(30,280,startroom,700,height/2);  
// PuzzleRoom.addDoor(width/2,540,EmptyRoom1,width/2,80);
}

//add a global variable that sets puzzlesolved as false and then have it so that the setup function does reset the variabel;