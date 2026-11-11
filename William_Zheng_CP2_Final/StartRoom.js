function setupstartroom() { 

startroom.walls=new Group();
  
startroom.addWalls(190,570,330,55);
startroom.addWalls(600,570,315,55);
startroom.addWalls(30,height/2,50,800);
startroom.addWalls(205,30,316,50);
startroom.addWalls(600,30,315,50);
startroom.addWalls(768,140,55,250);
startroom.addWalls(768,460,55,260);
  
startroom.addDoor(395,30,BridgeRoom,width/2,500); 
startroom.addDoor(395,550,GoblinRoom,width/2,100); 
startroom.addDoor(750,285,PuzzleRoom,80,height/2)
}