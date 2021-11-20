var bg,bgImg
var ufo,blackUfoImg,redUfoImg,orangeUfoImg
var ss,ssImg
var score=0
var gameState="play"
var ufoGroup,laserGroup
function preload(){
 bgImg=loadImage("Images/bg1.jpg")
 blackUfoImg= loadImage("Images/Black_UFO.png")
 redUfoImg= loadImage("Images/Red_UFO.png")
 orangeUfoImg= loadImage("Images/Orange_UFO.png")
 ssImg= loadImage("Images/ss.png")
}

function setup() {
  createCanvas(1200,600)
  bg=createSprite(0,0,1200,600)
  bg.addImage(bgImg)
  ss=createSprite(100,300)
  ss.addImage(ssImg)
  ss.scale=1/5
 
ufoGroup=new Group()
laserGroup=new Group()
 }

function draw() {
 
  background(0);
  
  drawSprites();
  fill("white")
  textSize(30)
  text("Score: "+score,120,50)

  if(gameState==="play"){
    if(KeyDown("up")){
    ss.y-=5
    }

    if(KeyDown("down")){
      ss.y+=5
    }







  }


}

