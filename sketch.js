const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
//Empty arrays
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 1200, 10);
  div1=new Division(5,630,10,divisionHeight);
  div2=new Division(80,630,10,divisionHeight);
  div3=new Division(170,630,10,divisionHeight);
  div4=new Division(255,630,10,divisionHeight);
  div5=new Division(330,630,10,divisionHeight);
  div6=new Division(410,630,10,divisionHeight);
  div7=new Division(475,630,10,divisionHeight);

  for (var j = 40; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 15; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 40; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 15; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }

}
function draw() {
  background(0);  
  Engine.update(engine);

 ground.display();
 div1.display();
 div2.display();
 div3.display();
 div4.display();
 div5.display();
 div6.display();
 div7.display();
 
 for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}

if(frameCount%60===0){
 particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
 
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}

for(var k=0; k<divisions.length; k++){
  divisions[k].display();
}
}

 


