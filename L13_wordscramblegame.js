

const WORDS = [
    "uncharacteristically",
    "unbelievability",
    "chimpanzee",
    "organisation",
    "environment",
    "technology",
    "experience"]
let hiddenword;


function setup(){
    createCanvas(1000,700);
    background(220);
    textAlign(CENTER,CENTER);

    


}
function draw(){
    textSize(50);
    text("Word Scramble Game!",width/2,height-600);
    text("Random Word: " + hiddenword,width/2,height-500);
}