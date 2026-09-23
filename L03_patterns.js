function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
// let diameter = 50;

// let circley = 1
// for(let count = 1 ; count<6 ; count++){
  // circle(count*50,circley,15)
  // circley = circley +50
// }
// circle(225,200,100)
// circle(375,200,100)
// circle(525,200,100)

  // Task 1: Colour Gradient




let count = 1
let circley = 1
for(let red = 0 ; red<1000 ; red+=10){
  fill(red,0,0);
  circle(count*5,circley*50,15)
  count=count+1





}
  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}