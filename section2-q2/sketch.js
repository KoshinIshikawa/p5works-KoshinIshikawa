// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  c = color(255, 0, 0)//赤
  b = color(0, 0, 0)//黒
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if (i % 2 == 0) {
        fill(j % 2 == 1 ? 150 : 255);
        console.log(i, j);
        rect(i * size, j * size, size, size);

        fill(c);
        ellipse(i * size + 0.5 * size, 1.5 * size, 0.8 * size);

        fill(b);
        ellipse(i * size + 0.5 * size, 5.5 * size, 0.8 * size);

        fill(b);
        ellipse(i * size + 0.5 * size, 7.5 * size, 0.8 * size);

      } else {
        fill(j % 2 == 0 ? 150 : 255);
        console.log(i, j);
        rect(i * size, j * size, size, size);

        fill(c);
        ellipse(i * size + 0.5 * size, 0.5 * size, 0.8 * size);

        fill(c);
        ellipse(i * size + 0.5 * size, 2.5 * size, 0.8 * size);

        fill(b);
        ellipse(i * size + 0.5 * size, 6.5 * size, 0.8 * size);
      }
    }
  }
}
