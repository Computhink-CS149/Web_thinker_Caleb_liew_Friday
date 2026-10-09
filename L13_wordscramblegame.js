

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
    hiddenword = "NOTEBOOK";

    scramble = createButton("Rescramble");
    scramble.position(width/2-400,height-350);
    scramble.size(200,40);
    scramble.style("font-size","20px");

    sub = createButton("Sumbit");
    sub.position(width/2,height-350);
    sub.size(200,40);
    sub.style("font-size","20px");
}
function draw(){
    textSize(50);
    text("Word Scramble Game!",width/2,height-600);
    text("Random Word: " + hiddenword,width/2,height-500);
}