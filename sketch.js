
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

function preload(){

  backgroundImg=loadImage("background.jpg");
  fishSadImg=loadImage("fishSad.png");
  fishHappyImg=loadImage("fishHappy.png");
  cutSound=loadSound("rope_cut.mp3");
  happySound=loadSound("happysound.mp3");
  sadSound=loadSound("sad.wav");

}

function setup() {

  createCanvas(800,750);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,745,800,10);

  fishtank=createImg("fishtank.jpg");
  fishtank.position(300,590);
  fishtank.size(225,150);

  fishHappy=createImg("fishHappy.png");
  fishHappy.position(5000,5000);
  fishHappy.size(100,90);

  b1=createImg("cut_btn.png");
  b1.position(20,20);
  b1.size(75,75);
  b1.mouseClicked(drop);

  b2=createImg("cut_btn.png");
  b2.position(310,25);
  b2.size(75,75);
  b2.mouseClicked(drop2);

  b3=createImg("cut_btn.png");
  b3.position(350,180);
  b3.size(75,75);
  b3.mouseClicked(drop3);

  rope = new Rope(10,{x:30,y:30});
  rope2=new Rope(7,{x:340,y:35});
  rope3=new Rope(5,{x:400,y:200});

  fish = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fish);

  happySound.play();
  happySound.setVolume(0);

  sadSound.play();
  sadSound.setVolume(0);

  rod1=new Rod(296,665,5,147);
  rod2=new Rod(527,665,5,147);
  rod3=new Rod(412,743,236,5);

  fish_con = new Link(rope,fish);
  fish_con_2=new Link(rope2,fish);
  fish_con_3=new Link(rope3,fish);

}

function draw() {

  background(0);
  image(backgroundImg,400,375,width,height);

  imageMode(CENTER);
  if(fish!=null){
    image(fishSadImg,fish.position.x,fish.position.y,100,70);
  }

  if(fish.position.y>600&&(fish.position.x>296&&fish.position.x<412)){
    fishHappy.position(400,650);
    happySound.setVolume(1);
  }

  rope.show();
  rope2.show();
  rope3.show();

  Engine.update(engine);

  rod1.show();
  rod2.show();
  rod3.show();
  
}

function drop(){

  cutSound.play();
  b1.position(2000,2000);
  rope.break();
  fish_con.dettach();
  fish_con = null; 

}

function drop2(){

  cutSound.play();
  b2.position(2000,2000);
  rope2.break();
  fish_con_2.dettach();
  fish_con_2 = null;

}

function drop3(){

  cutSound.play();
  b3.position(2000,2000);
  rope3.break();
  fish_con_3.dettach();
  fish_con_3 = null;

}