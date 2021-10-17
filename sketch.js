const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(width/2,height/2,Math.PI)
    rock = new Rock(width-1000,height/2,Math.PI)
    metal = new Metal(width-800,height/2,Math.PI)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    rubber.display();
    rock.display()
    metal.display();
    hammer.display();

    
 
}