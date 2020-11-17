// 最終課題を制作しよう
function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(220);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      fill(0, 140, 0);
      rect(j * 50, i * 50, 50, 50);
    }
  }
}
