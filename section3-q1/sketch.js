// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 50, 100, color(255, 0, 0));
}

function balloon(t, x, y, c){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(c);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, p + x, h + p + y);
}
