let picoimg;
let popsound;

function preload(){
    picoimg = loadImage("assets/pico-a.png");
    popsound = loadSound("assets/pop.mp3");
}
// let xpos,ypos;
let ballx,bally

function setup(){
    createCanvas(900,500);
    background(0);
    imageMode(CENTER);
    // xpos = width/2;
    // ypos = height/2;
    noStroke();
ballx =width/2;
bally =height/2;
}

let ballSize =30;
let ballSpeedx = 15;
let ballSpeedy = 10;
let randomR,randomG,randomB;

function draw(){
    // background (0);
    // fill(255)
    circle (ballx,bally,ballSize)
    ballx = ballx + ballSpeedx;
    bally = bally + ballSpeedy;
    if (ballx <= 0+15){
        ballSpeedx = ballSpeedx*-1
        randomR = random(0,255);
        randomB = random(0,255);
        randomG = random(0,255);
        fill(randomR,randomB,randomG,random(0,255));
    } 
    if (ballx >= width-15){
        ballSpeedx = ballSpeedx*-1
        randomR = random(0,255);
        randomB = random(0,255);
        randomG = random(0,255);
        fill(randomR,randomB,randomG,random(0,255));
    }
    if (bally <= 0+15){
        ballSpeedy = ballSpeedy*-1
        randomR = random(0,255);
        randomB = random(0,255);
        randomG = random(0,255);
        fill(randomR,randomB,randomG,random(0,255));
    }
    if (bally >= height-15){
        ballSpeedy = ballSpeedy*-1
        randomR = random(0,255);
        randomB = random(0,255);
        randomG = random(0,255);
        fill(randomR,randomB,randomG,random(0,255));
    }
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        ballSpeedx *=10;
        ballSpeedy *=10;
    } else if(keyCode === DOWN_ARROW){
        ballSpeedx *=0.8;
        ballSpeedy *=0.8;
    }
}






















// Recap 1

// let widthsize;
// widthsize = 110
// function draw(){
//     background(0);
//     image(picoimg,xpos,ypos,widthsize,133);
//     if (keyIsDown(RIGHT_ARROW)){
//         xpos = xpos+3;
//         widthsize = 55;
//     }
//     if (keyIsDown(LEFT_ARROW)){
//         xpos = xpos-3;
//         widthsize = 55;
//     }
//     if (keyIsDown(UP_ARROW)){
//         ypos = ypos-3;
//         widthsize =55;}
//     if (keyIsDown(DOWN_ARROW)){
//         ypos = ypos+3;
//         widthsize =55;
//     }
// }

// function keyPressed(){
//     if (keyCode===32) {
//     widthsize = 110;
//     popsound.play();
//     }
// }

