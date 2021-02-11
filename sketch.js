var ball;
var database;
var position;
function preload() {
  ballimg=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
  bk=loadImage("Hot Air Ballon-01.png")
}
function setup(){
    createCanvas(500,500);
    database= firebase.database()
    console.log (database)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.addAnimation("ball",ballimg)
    var ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition) //callback
}

function draw(){
    background(bk);
    if(position !== undefined){

    

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }

}
    drawSprites();
}


function readPosition(data){
    position = data.val()
    ball.x = position.x;
    ball.y= position.y;
}

function writePosition(x,y){
    database.ref ("ball/position").set ( {'x': position.x+x,'y': position.y+y} )
}