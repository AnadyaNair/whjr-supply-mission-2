var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1sprite = createSprite(300, 620, 25, 80);
	box1sprite.shapeColor = "#C59146"

	box2sprite = createSprite(380, 650, 180, 25, {restitution:0,isStatic:true});
	box2sprite.shapeColor = "#C59146"

	box3sprite = createSprite(480, 620, 25, 80);
	box3sprite.shapeColor = "#C59146"


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

var packoptions ={
	isStatic : false
}

function draw() {
  rectMode(CENTER);
  background("#242222");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 keyPressed();
 fill("white");
 textSize(20);
 text("Made by Anadya Nair, press down arrow key.", 200, 100);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}



