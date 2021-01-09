// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

function setup() {
  createCanvas(400, 400);
  c1 = color(126, 255, 148);
  c2 = color(255, 106, 171);
}


function draw() {
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);
  
  
  translate((-width/4.8), 0);
  for (let i = 1; i <=3; i++) {
    let lineX = (i * (width * 0.15)) + (i * (width * 0.15));
    setGradient( lineX , height*0.1, width*0.2, height*0.2, c2, c1, X_AXIS);
  }
  
  for (let i = 1; i <=3; i++) {
    let lineX = (i * (width * 0.15)) + (i * (width * 0.15));
    setGradient( lineX , height*0.1 + height*0.3, width*0.2, height*0.2, c1, c2, X_AXIS);
  }
  
  for (let i = 1; i <=3; i++) {
    let lineX = (i * (width * 0.15)) + (i * (width * 0.15));
    setGradient( lineX , height*0.1 + height*0.6, width*0.2, height*0.2, c2, c1, X_AXIS);
  }
  
  save("20210108.png");
  noLoop();
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
