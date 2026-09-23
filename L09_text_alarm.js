
let alarmSound;
let bgcolor;

function preload(){
    alarmSound =loadSound("assets/bossaNova.mp3");

}

let countdown = 5;
let timer;
function setup(){
    createCanvas(400,400);
    background(220);
    textAlign(CENTER);
    bgcolor= color(220);
}
function draw(){
    textSize(60);
    let xsecond=nf(second(),2);
    let xminute=nf(minute(),2);
    let xhour=nf(hour(),2);
    let timestring=(xhour + ":" + xminute + ":" + xsecond);
    text(timestring,100,100);
    background(bgcolor);
    fill(0);
    textSize(60);
    text(countdown,200,200);

    textSize(20);
    text("Click me to start the timer",200,300);


}

function mousePressed(){
    countdown=5;
    clearInterval(timer);
    timer=setInterval(countDown,1000);

}

function countDown(){
    if (countdown> 0 ){
        countdown--;
    
    }else{
        clearInterval(timer);
        alarmTimer = setInterval(alarm,7000);
    }
}

function alarm(){
    bgcolor = color(random(255),random(255),random(255)); 
    alarmSound.loop();


}


// Task 1----------------------------------------------
// function setup(){
//     createCanvas(500,500);
//     background("skyblue");
//     textAlign(CENTER,CENTER);
// }

// function draw(){
//     background("skyblue");
//     let xhour = nf(hour(),2);
//     let xminute = nf(minute(),2);
//     let xsecond = nf(second(),2);
//     let timeString = xhour + ":" + xminute + ":" + xsecond;
//     textSize(50);
//     text(timeString,width/2,height/2);

// }



// Task 1   -----------------------------------------
// let speed , xpos;

// function setup(){
    // createCanvas(500,500);
    // background("grey");
    // textAlign(CENTER,CENTER);
    
    // xpos = width/2;
    // speed = 5;
// }

// function draw(){
    // background("grey")
    // textSize(50);
    // text("bounce",xpos,height/2);
    // text("bounce",xpos+10,(height/2)-50);
    // text("bounce",xpos-10,(height/2)+50);
    // xpos = xpos+speed;

    // if (xpos > width-78){
    //     speed = speed*-1;
    // }
    // if (xpos < 78){
    //     speed = speed*-1;
    // }
// }

