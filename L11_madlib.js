let noun;
let verb;
let adjective;
let adverb;
let place;

let story;
let mystory;
let storytext="";
let storytemplates;
function setup(){
    createCanvas(600,600);
    background(220);
    textAlign(RIGHT,CENTER);

    noun = createInput("e.g.a dog");
    noun.position(width/2+20,25);
    
    verb = createInput("e.g.jump");
    verb.position(width/2+20,50);

    adjective = createInput("e.g.happy");
    adjective.position(width/2+20,75);

    adverb = createInput("e.g.angrily");
    adverb.position(width/2+20,100);

    place = createInput("e.g.Ank Mo Kio");
    place.position(width/2+20,125);
    
    story = createButton("Generate Story");
    story.position(width/2+20,150);
    story.mousePressed(updatetext);

    storytemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?"
    ]
    

}

function draw(){
    background(220);
    textAlign(RIGHT,CENTER);
    textSize(18);

    fill("")
    text("Enter a noun",width/2,34);
    text("Enter a verb",width/2,59);
    text("Enter a adjective",width/2,84);
    text("Enter a adverb",width/2,109);
    text("Enter a place",width/2,134);
    textAlign(CENTER,CENTER);
    fill("red");
    text(storytext,width/2,300);
}

function updatetext(){
    story = updatetext.input;
    // print(noun.value());
    // print(verb.value());
    // print(adjective.value());
    // print(adverb.value());
    // print(place.value());
    print(storytext);
    // print()
    let template = random(storytemplates);
    template = template.replace("{noun}", noun.value())
    template = template.replace("{verb}", verb.value())
    template = template.replace("{adj}", adjective.value())
    template = template.replace("{adv}", adverb.value())
    template = template.replace("{place}", place.value())
storytext = template;
}

// let textbox,colorbox;
// let updatetext;
// function setup(){
//     createCanvas(400,200);
//     background("skyblue");
//     textAlign(CENTER,CENTER);
//     textbox=createInput("");
//     textbox.position(100,50)
//     textbox.input(changedText);

//     colorbox = createColorPicker("#000")
//     colorbox.position(100,100);
    
// }

// function draw(){
//     background("skyblue");
//     fill(colorbox.value());
//     textSize(18);
//     text(updatetext,200,150);
    
// }

// function changedText(){
//     updatetext = textbox.value();
// }