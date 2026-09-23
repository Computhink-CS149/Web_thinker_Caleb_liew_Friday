// write your codes here
function setup() {
    createCanvas(1500,600);
    background(220);
    // noLoop();
}
let shapeColor="red";

function draw(){
// // print(width)
// // print(height)
// let green=0;
// let x=0;
// let y=0;

// for(let counter = 0 ;counter < 10 ; counter += 1 ){
//     green += 25;
//     x += 50;
//     y += 50;
//     fill(0,green,green);
//     circle(x,y,50);
// }
// ---------------------------------------------------------
fill(shapeColor)
    noStroke();
circle(width/2,300,300)

}

// function mousePressed(){
    // shapeColor= color(random(0,255),random(0,255),random(0,255))
// 
// }

// function mouseReleased(){
//     // shapeColor= color(255)
//     shapeColor= color(random(0,255),random(0,255),random(0,255))
// }

// function mouseMoved(){
    // shapeColor= color(random(0,255),random(0,255),random(0,255))
    // circle(mouseX,mouseY,50)
// }
let size =255;
function mousePressed(){
    shapeColor= color(random(0,255),random(0,255),random(0,255))
    size -= 5
    circle(mouseX,mouseY,size)
}

