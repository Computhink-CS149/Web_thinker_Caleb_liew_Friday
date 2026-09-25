let guessvalue;
let guessbutton;

let attempts = 0;
let hint = "S _ _ _ _"

let words = ["audio", "beach", "cable", "dance" , "earth", "flame", "giant", "habit", "image", "jelly"];

function setup(){
    createCanvas(800,700);
    background("grey");
    textAlign(CENTER,CENTER);
    guessvalue = createInput();
    guessvalue.position(width/2-150,height/2+50);

    guessbutton = createButton("Guess");
    guessbutton.position(width/2+50,height/2+50);
    guessbutton.mousePressed(updateText);
}

function draw(){
    background("grey");
    textSize(50);
    fill(0);
    text("Guess the hidden word!",width/2,100);
    text("Attempts: " + attempts, width/2,150);
    text(hint,width/2,200)


}


function updateText(){
    print("hello")
    attempts = attempts+1;


}
