
    
function setupMazeRoom() {

 MazeRoom.walls=new Group();
 
 MazeRoom.addWalls(0,0,110,500);
 MazeRoom.addWalls(65,50,20,170);
 MazeRoom.addWalls(70,10,50,210);
 MazeRoom.addWalls(210,5,300,100);
MazeRoom.addWalls(640,5,400,100);
MazeRoom.addWalls(540,55,75,40);
MazeRoom.addWalls(520,78,35,40);
MazeRoom.addWalls(755,75,180,40);
MazeRoom.addWalls(775,85,100,300);
MazeRoom.addWalls(795,230,100,50);
MazeRoom.addWalls(795,360,100,50);
MazeRoom.addWalls(775,535,100,300);
MazeRoom.addWalls(640,595,400,100);
MazeRoom.addWalls(580,495,140,100);
MazeRoom.addWalls(460,420,150,70);
MazeRoom.addWalls(520,365,30,40);
MazeRoom.addWalls(350,390,50,50);
MazeRoom.addWalls(320,420,30,110);
MazeRoom.addWalls(160,595,400,100);
MazeRoom.addWalls(80,495,300,100);
MazeRoom.addWalls(40,435,110,20);
MazeRoom.addWalls(15,385,80,100);
MazeRoom.addWalls(180,350,100,50);
MazeRoom.addWalls(135,210,20,50);
MazeRoom.addWalls(165,210,45,85);
MazeRoom.addWalls(190,190,10,125);
MazeRoom.addWalls(250,240,120,25);
MazeRoom.addWalls(320,210,25,160);
MazeRoom.addWalls(340,150,135,50);
MazeRoom.addWalls(415,150,40,15);
MazeRoom.addWalls(370,280,90,35);
MazeRoom.addWalls(560,245,180,35);
MazeRoom.addWalls(580,200,70,65);
MazeRoom.addWalls(638,310,25,130);
MazeRoom.addWalls(618,340,25,70);

MazeRoom.addDoor(width/2,0,EmptyRoom1,width/2,490); 

MazeRoom.addDoor(40,290,Death,width/2,height/2);
  
MazeRoom.addDoor(width/2,580,EmptyRoom2,width/2,80)
MazeRoom.addDoor(780,height/2,GoblinRoom,80,height/1.3)
}
