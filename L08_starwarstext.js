let storytext=[
"A long time ago in a Galaxy far,",
"far away..." , 
"THE BEGINNING",
"It is a period of learning...", 
"Students have begun their journey" ,
"into the world of..."
]
let BGM;
function preload(){
    BGM = loadSound("assets/star_wars_theme_8_bit.mp3");
}
let ypos;
let yscroll;
function setup(){
    createCanvas(700,600);
    background("black");
    textAlign(CENTER,CENTER);
    yscroll = height;
    
}

function draw(){
background("black")
ypos = yscroll;

for (let count = 0; count<6; count++){
    fill("yellow");
    textSize(38);
    text(storytext[count],width/2,ypos)
    ypos = ypos +50;
}
yscroll-=0.6;

if (yscroll<0){
    yscroll = height;


}

}


