var midRect,movingRect



function setup() {
  createCanvas(800,400);
 midRect=createSprite(400,200,100,100);
 movingRect=createSprite(300,200,100,100);
}

function draw() {
  background(255,255,255);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(midRect.x-movingRect.x<=midRect.width/2+movingRect.width/2
    && movingRect.x-midRect.x<=movingRect.width/2+midRect.width/2
	&& midRect.y-movingRect.y<=midRect.height/2+movingRect.height/2
    && movingRect.y-midRect.y<=movingRect.height/2+midRect.height/2)
    {
midRect.shapeColor="blue";
movingRect.shapeColor="blue";
  }
else{
	midRect.shapeColor="green";
	movingRect.shapeColor="green";
}



  drawSprites();
}