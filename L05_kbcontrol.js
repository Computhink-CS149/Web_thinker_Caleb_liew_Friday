xpos = 0
ypos = 0
function setup(){
createCanvas(1200,700);
background("grey");
noStroke();
xpos = width/2
ypos = height/2
}
// let size = 5
// rectsize = 20
// let showRect = false
// let showSquare = false
// let showCircle = false
// let color = "white"

function draw(){
background("skyblue");
// rect(width/2,height/2,rectsize,rectsize);
// if (showCircle){
    // circle(width/2,height/2,50,50);
// }

// if (showRect){
    // rect(width/2,height/2,100,50);
// }

// if (showSquare){
    // rect(width/2,height/2,50,50);
// }
// fill(color)
// circle(width/2,height/2,100);
fill("red")
circle(xpos,ypos,50);
fill("black")
circle(xpos-9,ypos-7,7);
circle(xpos+9,ypos-7,7);
circle(xpos,ypos+7,15);
if(keyIsDown(RIGHT_ARROW)){
    xpos += 5
}
if(keyIsDown(LEFT_ARROW)){
    xpos -= 5
}
if(keyIsDown(DOWN_ARROW)){
    ypos += 5
}
if(keyIsDown(UP_ARROW)){
    ypos -= 5
}
xpos=constrain(xpos,0,width);
ypos=constrain(ypos,0,height);
}

function keyPressed(){
    // rectsize = 200;
    // if (key ==='c'){
    //     showCircle =!showCircle
    // }
    // if (key ==='s'){
    //     showSquare =!showSquare
    // }
    // if (key ==='r'){
    //     showRect =!showRect
    // }
print(key)
print(keyCode)
// if (keyCode === DOWN_ARROW){
//     color = "red";
// }
// if (keyCode=== UP_ARROW){
//     color = "black";
// }

}
// function keyReleased(){
    // rectsize = 50;
// }



// function mouseDragged(){
// circle(mouseX,mouseY,size)
// size = size+100
// }

// function mousePressed(){
// size = 5;
// fill(random(1,255),random(1,255),random(1,255))
// }

