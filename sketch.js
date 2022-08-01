
var gameState="wait"
var play,about,how,next,home
var waitimg;

function preload(){
waitimg=loadImage("splash.gif")
}


function setup(){
createCanvas(windowWidth,windowHeight)

play=createImg("play.png")
play.position(width/2-150,height-150)
play.size(350,350)

back=createButton("home")
back.position(width/2-150,height-150)
back.size(100,100)
back.hide()


}


function draw(){
    if(gameState=="wait"){
background(waitimg)


}



if(play.mousePressed(()=>{
    gameState="playstate"

}))



if(gameState==="playstate"){
    background(0)
play.hide()
    back.show()
}

}