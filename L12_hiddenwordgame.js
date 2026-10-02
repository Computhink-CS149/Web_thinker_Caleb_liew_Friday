
let guessvalue;
let guessbutton;

let attempts = 0;
let hint = "S _ _ _ _"

let words = ["audio", "beach", "cable", "dance" , "earth", "flame", "giant", "habit", "image", "jelly"];
let hiddenword;

let message = "";

let ultraExtraHints = "";
function setup(){
    createCanvas(800,700);
    background("grey");
    textAlign(CENTER,CENTER);
    guessvalue = createInput();
    guessvalue.size(150,30);
    guessvalue.style("font-size","20px");
    guessvalue.position(width/2-150,height/2-75);

    guessbutton = createButton("Guess");
    guessbutton.size(150,36);
    guessbutton.style("font-size","20px");
    guessbutton.position(width/2+50,height/2-75);
    guessbutton.mousePressed(updateText);

    hiddenword = random(words);
    hiddenword = hiddenword.toUpperCase();
    print(hiddenword);

    hint = generateHint(hiddenword);
}

function draw(){
    background("grey");
    textSize(50);
    fill(0);
    text("Guess the hidden word!",width/2,100);
    text("Attempts: " + attempts, width/2,150);
    text(hint,width/2,200);
    
    textSize(35);
    text(message,width/2,550);
    text(ultraExtraHints,width/2,550);

}

function generateHint(aWord){
    let partial = " _".repeat(aWord.length-1);
    print(partial);
    return aWord[0]+ partial;
}


function updateText(){
    // print("hello")
    let guess = guessvalue.value();
    guess = guess.toUpperCase()
    if (guess === hiddenword){
        message = ("You won! You've guessed the word.");
        ultraExtraHints = "";
        print(message);
    }
    else{
        attempts++;
        ultraExtraHints = getCorrectLetter(guess,hiddenword);
    }

}

function getCorrectLetter(guess,hiddenword){
    let matchedLetter= "";
    for(let aLetter of guess){
        if (hiddenword.includes(aLetter)){
            if(!matchedLetter.includes(aLetter)){
                matchedLetter = matchedLetter+ aLetter+" ,";

            }
        }
}
return matchedLetter;

}