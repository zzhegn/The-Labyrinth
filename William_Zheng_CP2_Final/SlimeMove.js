

function SlimeMovement(){

if (Math.abs(SlimeSprite.velocity.x)>Math.abs(SlimeSprite.velocity.y)){
    if (SlimeSprite.velocity.x>0){
    SlimeSprite.changeAnimation('right',SlimeRight);
 }   
else{
    SlimeSprite.changeAnimation('left',SlimeLeft);
}
}
else{
if (SlimeSprite.velocity.y>0){
    SlimeSprite.changeAnimation('down',SlimeDown);
 }
else{
    SlimeSprite.changeAnimation('up',SlimeUp);
}
};


//  console.log(SlimeSprite.velocity.x, "x");
//  console.log(SlimeSprite.velocity.y, "y");

}