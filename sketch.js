const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1, box2;
var ground;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
     
    log1 = new Log(810,260,300, PI/2);

     

    bird = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(myEngine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
     
    log1.display();

     
  bird.display();
}