function setupDeathRoom(){
// console.log('death');

Death.walls=new Group();

Death.addWalls(width/2,30,800,60);
Death.addWalls(20,height/2,60,800);
Death.addWalls(width/2,575,800,60);
Death.addWalls(780,height/2,60,800);
}