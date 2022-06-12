// Prompt:
// An image is represented by an m x n integer grid image where image[i][j]
// represents the pixel value of the image.
// You are also given three integers sr, sc, and newColor.
// You should perform a flood fill on the image starting from the pixel image[sr][sc].
// To perform a flood fill, consider the starting pixel, plus any pixels connected
// 4-directionally to the starting pixel of the same color as the starting pixel,
// plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.

// Replace the color of all of the aforementioned pixels with newColor.
// Return the modified image after performing the flood fill.

// image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
// 1|1|1    2|2|2
// 1|1|0 => 2|2|0
// 1|0|1    2|0|1
// image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
// 0|0|0    2|2|2
// 0|0|0 => 2|2|2


const floodFill = (arr, row, col, fill) => {
  // let connected = new Set();
  // let queue = [`${row}:${col}`];

  // while (queue.length) {
  //     let curr = queue[0].split(':')
  //     let x = Number(curr[0]);
  //     let y = Number(curr[1]);
  //     if ( arr[x - 1] !== undefined && arr[x - 1][y] === arr[row][col] ) {
  //         if ( !connected.has(`${x - 1}${y}`) ) queue.push(`${x - 1}:${y}`);
  //     }
  //     if ( arr[x + 1] !== undefined && arr[x + 1][y] === arr[row][col] ) {
  //         if ( !connected.has(`${x + 1}${y}`) ) queue.push(`${x + 1}:${y}`);
  //     }
  //     if ( arr[x][y - 1] !== undefined && arr[x][y - 1] === arr[row][col] ) {
  //         if ( !connected.has(`${x}${y - 1}`) ) queue.push(`${x}:${y - 1}`);
  //     }
  //     if ( arr[x][y + 1] !== undefined && arr[x][y + 1] === arr[row][col] ) {
  //         if ( !connected.has(`${x}${y + 1}`) ) queue.push(`${x}:${y + 1}`);
  //     }
  //     connected.add( queue.shift() );
  // }
  // connected.forEach(coord => {
  //     let newArr = coord.split(':')
  //     arr[Number(newArr[0])][Number(newArr[1])] = fill;
  // })

  // return arr;
  let rows = arr.length;
  let cols = arr[0].length;
  let color = arr[row][col];
  if (color === fill) return arr;

  const dfs = (r, c) => {
    if (arr[r][c] === color) {
      arr[r][c] = fill
      if (r >= 1) dfs(r - 1, c);
      if (r + 1 < rows) dfs(r + 1, c);
      if (c >= 1) dfs(r, c - 1);
      if (c + 1 < cols) dfs(r, c + 1);
    }
  }
  dfs(row, col);
  return arr;
};

let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
let sr = 1;
let sc = 1;
let newColor = 2;

console.log(floodFill(image, sr, sc, newColor)); // [[2,2,2],[2,2,0],[2,0,1]]
image = [[0,0,0],[0,0,0]]
sr = 0;
sc = 0;

console.log(floodFill(image, sr, sc, newColor)); // [[2,2,2],[2,2,2]]