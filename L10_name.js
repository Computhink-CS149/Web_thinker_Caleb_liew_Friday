let usertext = "ENTER YOUR NAME HERE";
let agetext = "AGE"
let input;
let ageinput;
let colorpicker;
let rectcolor;
let textcolor;
function setup(){
    createCanvas(400,600);
    textAlign(CENTER,CENTER);
    
    colorpicker = createColorPicker("#8a2727")
    colorpicker.position(200,360);
    
    rectcolor = createColorPicker("#ffffff");
    rectcolor.position(200,390);

    textcolor = createColorPicker("#030303");
    textcolor.position(200,420);

    input= createInput("");
    input.position(width/2,300);
    input.input(updateText);
    
    ageinput= createInput("");
    ageinput.position(width/2,330);
    ageinput.input(updateageText);
}

function draw(){
    background(colorpicker.value());
    fill(rectcolor.value());
    noStroke();
    rect(40,90,320,180);
    fill(textcolor.value());
    textSize(24);
    text(usertext,width/2,150);
    
    textSize(24);
    text(agetext,width/2,230);
    
    textSize(14);
    text("Enter name here:",140,312)

    textSize(14);
    text("Enter age here:",143,342)

    textSize(14);
    text("Background color:",143,375)

    textSize(14);
    text("Rectangle color:",143,405)

    textSize(14);
    text("Text color:",150,435)
}
function updateText(){
    usertext = this.value();
    

}
function updateageText(){
    agetext = this.value();
    

}






// let usertext = "ENTER YOUR NAME HERE";
// let agetext = "AGE"
// let input;
// let ageinput;
// function setup(){
    // createCanvas(400,400);
    // background(220);
    // textAlign(CENTER,CENTER);
    // input= createInput("");
    // input.position(width/2,300);
    // input.input(updateText);
    
    // ageinput= createInput("");
    // ageinput.position(width/2,330);
    // ageinput.input(updateageText);
// }

// function draw(){
    // background(220);
    // fill(0);
//     textSize(24);
//     text(usertext,width/2,height/2);
    
//     textSize(24);
//     text(agetext,width/2,230);
    
//     textSize(14);
//     text("Enter name here:",140,312)

//     textSize(14);
//     text("Enter age here:",143,342)
// }
// function updateText(){
//     usertext = this.value();
    

// }
// function updateageText(){
//     agetext = this.value();
    

// }
