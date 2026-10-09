

const WORDS = [
    "uncharacteristically",
    "unbelievability",
    "chimpanzee",
    "organisation",
    "environment",
    "technology",
    "experience"]
let hiddenword;
let messedup;

let score = 0;
let streak = 0;
let maxstreak = 0;
function setup(){
    createCanvas(1000,700);
    background(220);
    textAlign(CENTER,CENTER);
    hiddenword = random(WORDS);
    hiddenword = hiddenword.toUpperCase()

    scramble = createButton("Rescramble");
    scramble.position(width/2-400,height-350);
    scramble.size(200,40);
    scramble.style("font-size","20px");

    sub = createButton("Sumbit");
    sub.position(width/2+200,height-350);
    sub.size(200,40);
    sub.style("font-size","20px");

    guessinput = createInput();
    guessinput.position(width/2-100,height-350);
    guessinput.size(200,40);
    guessinput.style("font-size","20px");

    hiddenword = shuffleWord();

}
function shuffleWord(someWord){
    let arraySome = someWord.spilt("");
    for (let i = arraySome.length-1; i > 0; i--){
        let j = floor(random(i-1));
        let memory = arraySome[j];
        arraySome[j] = arraySome[i];
        arraySome[i] = memory;
}
    return arraySome.join("");
}
function pickNewWord(){
    hiddenword = random(WORDS);
    hiddenword = hiddenword.toUpperCase();
    messedup = shuffleWord(hiddenword);
    return hiddenword;
}
function draw(){
    textSize(50);
    text("Word Scramble Game!",width/2,height-600);
    text("Random Word: " + hiddenword,width/2,height-500);

    textSize(28)
    text("Score: " + score, width/2,height-200);
    text("Streak: " + streak + " (Max: " + maxstreak + ")" ,width/2,height-150);
}
