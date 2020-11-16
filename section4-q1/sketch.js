// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100
  size = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if (count < 50) {
    size = count;
  } else {
    size = 100 - count;
  }
  ellipse(width / 2, height / 2, size);
  if (keyIsPressed) {
    count += 1;
  }
}
