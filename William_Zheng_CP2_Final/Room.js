class Room{
  constructor(img,x,y,walls){
    this.doors=[];
    this.x=x;
    this.y=y;
    this.img=img;
    this.walls=[];
  }
  
  addDoor(x,y,targetRoom, spawnX, spawnY) {
    let d = new Door(x,y,targetRoom, spawnX, spawnY);
    this.doors.push(d);
  }
  addWalls(wx,wy,width,height){
    let w=createSprite(wx,wy,width,height)
    this.walls.push(w);
  }
  display() {
    
    image(this.img,this.x,this.y)
    
    for (let d of this.doors){
     d.draw();
  }
}
}