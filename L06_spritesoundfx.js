let picoImg;
let soundSFX;
let soundBGM;
function  preload() {
    picoImg = loadImage('assets/pico-a.png');
    soundBGM = loadSound('assets/star_wars_theme_8_bit.mp3');
    soundSFX = loadSound('assets/bossaNova.mp3');
}
let ypos
let xpos
function setup(){
    createCanvas(400,400);
    background("lightblue");
    // rectMode(CENTER);
    imageMode(CENTER)
    noStroke();
    xpos = width/2;
    ypos = height/2;
}

function draw(){
    background("lightblue");
    image (picoImg,xpos,ypos,110,133);
    if (keyIsDown(RIGHT_ARROW)){
        xpos = xpos+3
    }
    if (keyIsDown(LEFT_ARROW)){
        xpos = xpos-3
    }
    if (keyIsDown(UP_ARROW)){
        ypos = ypos-3
        soundBGM.play
    }
    if (keyIsDown(DOWN_ARROW)){
        ypos = ypos+3
        soundBGM.stop
    }    
    xpos = constrain(xpos,55,width-55);
    ypos = constrain(ypos,67,height-67);

}

function keyPressed(){
    if (keyCode === 32);
    soundSFX.play();
}



// function draw(){
//     background("skyblue");
//     fill("white");
//     rect(width/2,height/2,300,300)
//     fill("black");
//     rect(xpos,ypos,50,50)
//     if (keyIsDown(UP_ARROW)){
//         ypos = ypos-3
//     }
//     if (keyIsDown(DOWN_ARROW)){
//         ypos = ypos+3
//     }
//     if (keyIsDown(RIGHT_ARROW)){
//         xpos = xpos+3
//     }
//     if (keyIsDown(LEFT_ARROW)){
//         xpos = xpos-3
//     }
//     xpos = constrain(xpos,75,325);
//     ypos = constrain(ypos,75,325);
// }








