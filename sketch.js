var fixedRect,movingRect;




function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(600, 400, 50, 80);
 fixedRect.shapeColor="green"
 movingRect=createSprite(400,200,80,30)
 movingRect.shapeColor="green"
}

function draw() {
  background(255,255,255); 
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor="lightblue"
    fixedRect.shapeColor="lightgreen"
  }
else{
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green" 
}





  drawSprites();
}