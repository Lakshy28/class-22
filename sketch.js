const Engine=Matter.Engine
const Bodies=Matter.Bodies 
const World=Matter.World
var engine ,world 
var ground,ball

function setup() {
var canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(100,390,200,20,ground_options)
World.add(world,ground)
var ball_options={
  'restitution':1.0
}
ball = Bodies.circle(200,200,20,ball_options)
World.add(world,ball)
}

function draw() {
  background("green");  
Engine.update(engine)
rect(ground.position.x,ground.position.y,800,30)
ellipse(ball.position.x,ball.position.y,20,20)
}