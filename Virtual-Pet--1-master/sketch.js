//Create variables here
var dog,dogIMG, happyDog,happyDogIMG, database, foodS, foodStock; 
function preload()
{
  dog = loadImage("images/Dog.png")
  happyDog = loadImage("images/happyDog.png")
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(200,200,10,10);
  dog.addImage(dogImg);
  happyDog = createSprite(30,200,10,10)
  happyDog = addImage(happyDogIMG)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
 if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
 }
  drawSprites();
  
}

function readStock(data){
     foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}

