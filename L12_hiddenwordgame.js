let guessvalue;
let guessbutton;

function setup(){
    createCanvas(800,700);
    background("grey");
    textAlign(CENTER,CENTER);
    guessvalue = createInput();
    guessvalue.position(width/2-150,height/2+50);

    guessbutton = createButton("Guess");
    guessbutton.position(width/2+50,height/2+50);
}

function draw(){
    background("grey");
    textSize(50);
    fill(255);
    text("Guess the hidden word!",width/2,200);


}