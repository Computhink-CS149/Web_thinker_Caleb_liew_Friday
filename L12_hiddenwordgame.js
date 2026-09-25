let guessvalue;
let guessbutton;

let attempts = 0;

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
    text("Guess the hidden word!",width/2,200);
    text("Attempts:" + attempts, width/2,230);

}


function updateText(){
    print("hello")


}
