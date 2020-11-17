// 最終課題を制作しよう
let board = [[0,0,0],
             [0,0,0],
             [0,0,0]];
let col;
let row;
let turn = 0;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      line(j * 100, 0, j * 100, height);
      line(0, i * 100, width, i * 100);
      if (board[i][j] == 1) {
        fill(255);
        ellipse(i * 100 + 50, j * 100 + 50, 80, 80);
      }
      if (board[i][j] == 2) {
        crossmark(i * 100 + 10, j * 100 + 10, i * 100 + 90, j * 100 + 90);
      }
    }
  }
}

function mousePressed() {
  turn = turn + 1;
  if (turn > 2) {
    turn = 1;
  }
  row = floor(mouseX / 100);
  col = floor(mouseY / 100);

  if (turn == 1) {
    board[row][col] = 1;
  } else if (turn == 2) {
    board[row][col] = 2;
  }
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}
