let playerx;
let playery;
let playersize = 50;
let velocity = 0;
let isgrounded = false;

let spikesx = [];
let spikewidth = 30;
let spikeheight = 50;
let spikespeed = 5;

let gameover = false;
function setup(){
    createCanvas(800,600);
    background("black");
    // rectMode(CENTER);
    playery= height-75

    for (let count = 0; count<3 ; count++){
        spikesx.push(width + count * 300);
    }
}

function draw(){
    background("black");
    
    if (gameover){
        fill("red");
        textSize(44);
        

    }
    fill("lime");
    rect(50,playery,playersize,playersize);

    velocity += 0.8;
    playery += velocity;

    if (playery >= height - playersize ) {
        playery = height-playersize;
        isgrounded = true;
        velocity = 0;
    } else{
        isgrounded = false;
    }

    fill("white");
    textSize(30);
    textAlign(CENTER,CENTER);
    text("Press space to jump!",width/2,50);

    fill("red");
    
    for (let count = 0; count<3; count++){
       spikesx[count] -=spikespeed;
        
       if(spikesx[count]< 0 - spikewidth){
            spikesx[count] = width+random(100,300);
       };
    
       triangle(
            spikesx[count],height,
            spikesx[count]+spikewidth/2 ,height-spikeheight,
            spikesx[count]+spikewidth,height
        );    
    }
    
}

function keyPressed(){
    if (keyCode === 32 && isgrounded){
        velocity = -15;
    }

}