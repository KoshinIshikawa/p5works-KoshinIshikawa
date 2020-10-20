// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    let x = i * 10 + 10;
    ellipse(50, 50, x);
    if (i < 5) {
      stroke(0, 0,255);
    } else {
      stroke(255, 0, 0);
    }
    noFill();
  }
}
