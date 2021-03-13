
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  background1= loadImage("images/bg.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
  mango2=new Mango(1050,150,30);
  mango3=new Mango(1120,120,30);
  mango4=new Mango(900,200,30);
  mango5=new Mango(1150,190,30);

	treeObj=new Tree(1050,580);

	stone = new Stone(220,400,50,50)

	groundObject=new Ground(width/2,600,width,20);

	sling = new Sling(stone.body, {x:220,y:400 } )
	
	Engine.run(engine);

}

function draw() {

  background(background1);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);


  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  sling.display();

  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
}
function mouseReleased(){
    sling.fly()
}
function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance)
  console.log(lmango.r,lstone.r)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}