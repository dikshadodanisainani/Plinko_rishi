const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() 
{
   var canvas = createCanvas(480,800);
  
   engine = Engine.create();
   world = engine.world;

  wallUp = new Ground(100,10,1200,20);
  wallDown = new Ground(600,height,1200,20);
  wallLeft = new Ground(5,height,20,1700);
  wallRight = new Ground(475,height,20,1700);

  div1 = new Divisions(20,height,5,500);
  div2 = new Divisions(90,height,5,500);
  div3 = new Divisions(160,height,5,500);
  div4 = new Divisions(230,height,5,500);
  div5 = new Divisions(300,height,5,500);
  div6 = new Divisions(370,height,5,500);
  div7 = new Divisions(460,height,5,500);
/*

  for(var k =0; k<= width; k = k + 80)
  {

    divisions.push(new Divisions (k , height - divisionHeight/2,10,divisionHeight));

  }
  */
 for (var j = 40; j <= width; j = j+50)
 {
   plinkos.push(new Plinko(j,75));

 }
 for(var j =15; j <= width-10 ;  j = j+50)
 {
   plinkos.push(new Plinko(j,175));
 }
  
}

function draw() 
{
  background("black");  
  wallDown.display();
  wallLeft.display();
  wallRight.display();
  wallUp.display();
  
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  drawSprites();
}