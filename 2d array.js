const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

let max = arr[0][0];
let pos = { row: 0, col: 0 };

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
      pos = { row: i, col: j };
    }
  }
}

console.log("Max:", max);
console.log("Position:", pos);