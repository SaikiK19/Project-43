var craft
var space_img
var craft_left,craft_right,craft_both,craft_none
var iss,iss_img
var dock
var hasDocked = false

function preload(){
  space_img = loadImage("Docking-undocking/spacebg.jpg")
  craft_none = loadImage("Docking-undocking/spacecraft1.png")
  craft_left = loadImage("Docking-undocking/spacecraft3.png")
  iss_img = loadImage("Docking-undocking/iss.png")
  craft_right = loadImage("Docking-undocking/spacecraft4.png")
  craft_both = loadImage("Docking-undocking/spacecraft2.png")
}

function setup() {
  createCanvas(1200,600);
  iss = createSprite(400,250,20,20)
  dock = createSprite(340,260,20,20)
  craft = createSprite(400, 500, 60, 60);
}

function draw() {
  background(space_img);
  dock.collide(craft)
  craft.addImage(craft_none)
  iss.addImage(iss_img)
  craft.scale = 0.2
  craft.velocityY = 0
  craft.velocityX = 0
  dock.visible = false
  if(dock.y < 260){
    hasDocked = true
    craft.y = 300
    console.log(hasDocked)
  }
  if(hasDocked === true){
    textSize(35)
    text("DOCKED SUCCESFULLY",520,300)
  }
  if(keyIsDown(UP_ARROW)&& hasDocked === false){
    craft.addImage(craft_both)
    craft.velocityY = -2
  }  
  if(keyIsDown(DOWN_ARROW)&& hasDocked === false){
    craft.addImage(craft_none)
  }  
  if(keyIsDown(LEFT_ARROW)&& hasDocked === false){
    craft.addImage(craft_left)
    craft.velocityX = 2
  }  
  if(keyIsDown(RIGHT_ARROW)&& hasDocked === false){
    craft.addImage(craft_right)
    craft.velocityX = -2
  }  
  drawSprites();
}