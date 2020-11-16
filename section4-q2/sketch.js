// テキスト「アニメーション」
let x, y, vx, vy, angle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 4;
  y = height / 4;
  vx = 4;
  vy = 4;
  angle = 0;
}

function draw(){
  background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
  angle += 0.1;
  star(x, y, 40, angle);
  x += vx;
  y += vy;

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

  if(x < 0 || x > width) {
    vx = -1 * vx;
  }
  if(y < 0 || y > height) {
    vy = -1 * vy;
  }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 -  HALF_PI ;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    theta = theta + angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}
