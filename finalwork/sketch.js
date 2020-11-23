// 最終課題を制作しよう
let board = [[0,0,0],
             [0,0,0],
             [0,0,0]];
let col;
let row;
let turn = 0;

function setup() {
  createCanvas(360, 360);
}

function draw() {
  background(255);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      line(j * 100, 0, j * 100, 300);
      line(0, i * 100, 300, i * 100);
      if (board[i][j] == 1) {
        fill(255);
        ellipse(i * 100 + 50, j * 100 + 50, 80, 80);
      }
      if (board[i][j] == 2) {
        crossmark(i * 100 + 10, j * 100 + 10, i * 100 + 90, j * 100 + 90);
      }
    }
  }
  if (turn == 1) {
    textSize(32);
    fill(0);
    text("Turn: X", 30, 350);
  } else if (turn == 2) {
    textSize(32);
    fill(0);
    text("Turn: ○", 30, 350);
  }

  let result = checkWinner();
  if (result != null && (result == 1 || result == 2)) {
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');
    if (result == 1) {
      resultP.html(`○ wins!`);
    } else {
      resultP.html(`X wins!`);
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

function equals3(a, b, c) {
  return a == b && b == c && a != '';
}

function checkWinner() {
  let winner = null;

  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

 return winner;
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}
