function PlayerMovement(){
  
  playerSprite.velocity.x=0;
  playerSprite.velocity.y=0;
  
  let move=8;
  
  if (keyIsDown(87)==true){
    playerSprite.velocity.y=-move;
    playerSprite.changeAnimation("up");
  }
  else if (keyIsDown(83)==true){
    playerSprite.velocity.y=+move;
    playerSprite.changeAnimation("down");
  }
  else if (keyIsDown(68)==true){
    playerSprite.velocity.x=+move;
    playerSprite.changeAnimation("right");
  }
  else if (keyIsDown(65)==true){
    playerSprite.velocity.x=-move;
    playerSprite.changeAnimation("left");
  }
  else{
    playerSprite.changeAnimation("idle");
  }
    
  if (playerSprite.position.x<=0){
    playerSprite.velocity.x=playerSprite.velocity.x+move
  }
  else if (playerSprite.position.x>=width){
    playerSprite.velocity.x=playerSprite.velocity.x-move
  }
  else if (playerSprite.position.y<=0){
    playerSprite.velocity.y=playerSprite.velocity.y+move
  }
  else if (playerSprite.position.y>=height){
    playerSprite.velocity.y=playerSprite.velocity.y-move
  }

}