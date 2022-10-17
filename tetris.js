var cv = document.querySelector("#cv");
var c = cv.getContext("2d");
var tetris = [
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //5
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //10
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //15
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //20
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
];
var fps = 15;
var mino = true;
var tetrimino = [0, 1, 2, 3, 4, 5, 6];
var next_tetrimino = [];
var random = 0;
for (l = 0; l <= 2; l++) {
  random = Math.floor(Math.random() * tetrimino.length);
  next_tetrimino[l] = tetrimino[random];
  tetrimino.splice(random, 1);
}
var hold_flag = 0;
var hold = -1;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var score = 0;
var line = 0;
var stop_flag = 0;
var zz = setInterval(function () {
  c.clearRect(0, 0, 1000, 1000);
  if (mino == true) {
    if (next_tetrimino[3] != true) {
      if (tetrimino.length == 0) {
        tetrimino = [0, 1, 2, 3, 4, 5, 6];
      }
      random = Math.floor(Math.random() * tetrimino.length);
      next_tetrimino[3] = tetrimino[random];
      tetrimino.splice(random, 1);
    }

    if (next_tetrimino[0] == 0) {
      d = [0, 4];
      e = [0, 5];
      f = [0, 6];
      g = [0, 7];
      h = 1;
    } else if (next_tetrimino[0] == 1) {
      d = [0, 5];
      e = [0, 6];
      f = [1, 5];
      g = [1, 6];
      h = 2;
    } else if (next_tetrimino[0] == 2) {
      d = [0, 6];
      e = [0, 7];
      f = [1, 5];
      g = [1, 6];
      h = 3;
    } else if (next_tetrimino[0] == 3) {
      d = [0, 4];
      e = [0, 5];
      f = [1, 5];
      g = [1, 6];
      h = 4;
    } else if (next_tetrimino[0] == 4) {
      d = [0, 4];
      e = [1, 4];
      f = [1, 5];
      g = [1, 6];
      h = 5;
    } else if (next_tetrimino[0] == 5) {
      d = [0, 7];
      e = [1, 7];
      f = [1, 6];
      g = [1, 5];
      h = 6;
    } else if (next_tetrimino[0] == 6) {
      d = [0, 6];
      e = [1, 5];
      f = [1, 6];
      g = [1, 7];
      h = 7;
    }
    i = 1;
    if (
      tetris[d[0]][d[1]] == 0 &&
      tetris[e[0]][e[1]] == 0 &&
      tetris[f[0]][f[1]] == 0 &&
      tetris[g[0]][g[1]] == 0
    ) {
      tetris[d[0]][d[1]] = 8;
      tetris[e[0]][e[1]] = 8;
      tetris[f[0]][f[1]] = 8;
      tetris[g[0]][g[1]] = 8;
    } else {
      console.log(tetris);
      clearInterval(zz);
      console.log("fin");
    }
    next_tetrimino.splice(0, 1);
    mino = false;
  } else {
    if (
      (tetris[d[0] + 1][d[1]] == 0 || tetris[d[0] + 1][d[1]] == 8) &&
      (tetris[e[0] + 1][e[1]] == 0 || tetris[e[0] + 1][e[1]] == 8) &&
      (tetris[f[0] + 1][f[1]] == 0 || tetris[f[0] + 1][f[1]] == 8) &&
      (tetris[g[0] + 1][g[1]] == 0 || tetris[g[0] + 1][g[1]] == 8)
    ) {
      tetris[d[0]][d[1]] = 0;
      tetris[e[0]][e[1]] = 0;
      tetris[f[0]][f[1]] = 0;
      tetris[g[0]][g[1]] = 0;
      tetris[d[0] + 1][d[1]] = 8;
      tetris[e[0] + 1][e[1]] = 8;
      tetris[f[0] + 1][f[1]] = 8;
      tetris[g[0] + 1][g[1]] = 8;
      d = [d[0] + 1, d[1]];
      e = [e[0] + 1, e[1]];
      f = [f[0] + 1, f[1]];
      g = [g[0] + 1, g[1]];
      stop_flag = 0;
    } else {
      stop_flag += 1;
      if (stop_flag >= 20) {
        stop_flag = 0;

        tetris[d[0]][d[1]] = h;
        tetris[e[0]][e[1]] = h;
        tetris[f[0]][f[1]] = h;
        tetris[g[0]][g[1]] = h;
        for (j = 0; j <= 19; j++) {
          var delete_flag = true;
          for (k = 0; k <= 9; k++) {
            if (
              tetris[j][k + 1] == 0 ||
              tetris[j][k + 1] == 8 ||
              tetris[j][k + 1] == 9
            ) {
              delete_flag = false;
            }
          }
          if (delete_flag == true) {
            tetris.splice(j, 1);
            tetris.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
            line += 1;
            score += 1000;
            delete_flag = false;
          }
        }
        mino = true;
        hold_flag = 0;
      }
    }
  }
  for (a = 0; a <= 20; a++) {
    for (b = 0; b <= 11; b++) {
      if (tetris[a][b] == 0) {
        c.fillStyle = "white";
      } else if (tetris[a][b] == 1) {
        c.fillStyle = "cyan";
      } else if (tetris[a][b] == 2) {
        c.fillStyle = "yellow";
      } else if (tetris[a][b] == 3) {
        c.fillStyle = "lightgreen";
      } else if (tetris[a][b] == 4) {
        c.fillStyle = "red";
      } else if (tetris[a][b] == 5) {
        c.fillStyle = "blue";
      } else if (tetris[a][b] == 6) {
        c.fillStyle = "orange";
      } else if (tetris[a][b] == 7) {
        c.fillStyle = "magenta";
      } else if (tetris[a][b] == 8) {
        if (h == 1) {
          c.fillStyle = "cyan";
        } else if (h == 2) {
          c.fillStyle = "yellow";
        } else if (h == 3) {
          c.fillStyle = "lightgreen";
        } else if (h == 4) {
          c.fillStyle = "red";
        } else if (h == 5) {
          c.fillStyle = "blue";
        } else if (h == 6) {
          c.fillStyle = "orange";
        } else if (h == 7) {
          c.fillStyle = "magenta";
        }
      } else if (tetris[a][b] == 9) {
        c.fillStyle = "black";
      }
      c.fillRect(120 + 20 * b, 80 + 20 * a, 20, 20);
      document.onkeydown = function (z) {
        if (!z) z = window.event;
        if (z.key == "h") {
          if (hold_flag == 0) {
            stop_flag = 0;
            hold_flag = 1;
            if (hold == -1) {
              hold = h;
              mino = true;
            } else {
              next_tetrimino.unshift(hold - 1);
              hold = h;
              mino = true;
            }
            tetris[d[0]][d[1]] = 0;
            tetris[e[0]][e[1]] = 0;
            tetris[f[0]][f[1]] = 0;
            tetris[g[0]][g[1]] = 0;
          }
        }
        if (z.key == "l") {
          if (
            (tetris[d[0]][d[1] + 1] == 0 || tetris[d[0]][d[1] + 1] == 8) &&
            (tetris[e[0]][e[1] + 1] == 0 || tetris[e[0]][e[1] + 1] == 8) &&
            (tetris[f[0]][f[1] + 1] == 0 || tetris[f[0]][f[1] + 1] == 8) &&
            (tetris[g[0]][g[1] + 1] == 0 || tetris[g[0]][g[1] + 1] == 8)
          ) {
            tetris[d[0]][d[1]] = 0;
            tetris[e[0]][e[1]] = 0;
            tetris[f[0]][f[1]] = 0;
            tetris[g[0]][g[1]] = 0;
            tetris[d[0]][d[1] + 1] = 8;
            tetris[e[0]][e[1] + 1] = 8;
            tetris[f[0]][f[1] + 1] = 8;
            tetris[g[0]][g[1] + 1] = 8;
            d = [d[0], d[1] + 1];
            e = [e[0], e[1] + 1];
            f = [f[0], f[1] + 1];
            g = [g[0], g[1] + 1];
          }
        }
        if (z.key == "j") {
          if (
            (tetris[d[0]][d[1] - 1] == 0 || tetris[d[0]][d[1] - 1] == 8) &&
            (tetris[e[0]][e[1] - 1] == 0 || tetris[e[0]][e[1] - 1] == 8) &&
            (tetris[f[0]][f[1] - 1] == 0 || tetris[f[0]][f[1] - 1] == 8) &&
            (tetris[g[0]][g[1] - 1] == 0 || tetris[g[0]][g[1] - 1] == 8)
          ) {
            tetris[d[0]][d[1]] = 0;
            tetris[e[0]][e[1]] = 0;
            tetris[f[0]][f[1]] = 0;
            tetris[g[0]][g[1]] = 0;
            tetris[d[0]][d[1] - 1] = 8;
            tetris[e[0]][e[1] - 1] = 8;
            tetris[f[0]][f[1] - 1] = 8;
            tetris[g[0]][g[1] - 1] = 8;
            d = [d[0], d[1] - 1];
            e = [e[0], e[1] - 1];
            f = [f[0], f[1] - 1];
            g = [g[0], g[1] - 1];
          }
        }
        console.log();
      };
    }
  }
  for (m = 0; m <= 2; m++) {
    if (next_tetrimino[m] == 0) {
      c.fillStyle = "cyan";
      c.fillRect(390, 70 + m * 60, 80, 20);
    } else if (next_tetrimino[m] == 1) {
      c.fillStyle = "yellow";
      c.fillRect(410, 60 + m * 60, 40, 40);
    } else if (next_tetrimino[m] == 2) {
      c.fillStyle = "lightgreen";
      c.fillRect(420, 60 + m * 60, 40, 20);
      c.fillRect(400, 80 + m * 60, 40, 20);
    } else if (next_tetrimino[m] == 3) {
      c.fillStyle = "red";
      c.fillRect(400, 60 + m * 60, 40, 20);
      c.fillRect(420, 80 + m * 60, 40, 20);
    } else if (next_tetrimino[m] == 4) {
      c.fillStyle = "blue";
      c.fillRect(400, 60 + m * 60, 20, 20);
      c.fillRect(400, 80 + m * 60, 60, 20);
    } else if (next_tetrimino[m] == 5) {
      c.fillStyle = "orange";
      c.fillRect(440, 60 + m * 60, 20, 20);
      c.fillRect(400, 80 + m * 60, 60, 20);
    } else if (next_tetrimino[m] == 6) {
      c.fillStyle = "magenta";
      c.fillRect(420, 60 + m * 60, 20, 20);
      c.fillRect(400, 80 + m * 60, 60, 20);
    }
  }
  if (hold == 1) {
    c.fillStyle = "cyan";
    c.fillRect(20, 70, 80, 20);
  } else if (hold == 2) {
    c.fillStyle = "yellow";
    c.fillRect(40, 60, 40, 40);
  } else if (hold == 3) {
    c.fillStyle = "lightgreen";
    c.fillRect(50, 60, 40, 20);
    c.fillRect(30, 80, 40, 20);
  } else if (hold == 4) {
    c.fillStyle = "red";
    c.fillRect(30, 60, 40, 20);
    c.fillRect(50, 80, 40, 20);
  } else if (hold == 5) {
    c.fillStyle = "blue";
    c.fillRect(30, 60, 20, 20);
    c.fillRect(30, 80, 60, 20);
  } else if (hold == 6) {
    c.fillStyle = "orange";
    c.fillRect(70, 60, 20, 20);
    c.fillRect(30, 80, 60, 20);
  } else if (hold == 7) {
    c.fillStyle = "magenta";
    c.fillRect(50, 60, 20, 20);
    c.fillRect(30, 80, 60, 20);
  }
  c.fillStyle = "black";
  c.font = "30px Arial";
  c.textAlign = "start";
  c.fillText("Next", 380, 40);
  c.strokeRect(380, 50, 100, 180);
  c.textAlign = "center";
  c.fillText("Hold", 60, 40);
  c.strokeRect(10, 50, 100, 60);
  c.fillText("Score", 60, 150);
  c.strokeRect(10, 160, 100, 40);
  c.fillText("Line", 60, 240);
  c.strokeRect(10, 250, 100, 40);
  c.font = "20px Arial";
  c.fillText(score, 60, 185);
  c.fillText(line, 60, 275);
}, 1000 / fps);
