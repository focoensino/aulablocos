
var topEdge,leftEdge,rightEdge
var nome = ["artur", "sergio",10]
console.log(nome)

var grupoBlocos
var raquete,bola

function preload(){

  }
  

function setup(){

createCanvas(500,400)




   bola = createSprite(250,250,20,20)
   raquete = createSprite(200,350,120,10)
   grupoBlocos = new Group()

   //criando as bordas
   topEdge = createEdgeSprites(topEdge)
   leftEdge = createEdgeSprites(leftEdge)
   rightEdge = createEdgeSprites(rightEdge)

bola.velocityX = 3
bola.velocityY = 4



criarLinha(65,"red")
criarLinha(65+29*1,"blue")
criarLinha(65+29*2,"yellow")
criarLinha(65+29*3,"pink")



}

function draw(){
background(0)
raquete.x = World.mouseX

if(raquete.x < 65){
    raquete.x = 65
}

if(raquete.x > 435){
  raquete.x = 435
}



drawSprites()

bola.bounceOff(topEdge)
bola.bounceOff(leftEdge)
bola.bounceOff(rightEdge)
bola.bounceOff(raquete)
bola.bounceOff(grupoBlocos)


}



function criarLinha(y,cor){

  for(var c = 0; c<6; c++){

    var brick = createSprite(65+54*c,y,50,25)
 
     brick.shapeColor = cor
     grupoBlocos.add(brick)
 
 }

}