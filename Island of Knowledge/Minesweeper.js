function solution(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const newMatrix = Array(numRows)
    .fill()
    .map(() => Array(numCols).fill(0));

  const rowIndexOffsets = [-1, 0, 1];
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      let minesCounterInJ = 0;
      for (let k = 0; k < rowIndexOffsets.length; k++) {
        const h = rowIndexOffsets[k];
        for (let l = 0; l < rowIndexOffsets.length; l++) {
          const v = rowIndexOffsets[l];
          const x = i + h;
          const y = j + v;
          // i was stuck here because i was not considering the case when h and v are both 0
          // !(h === 0 && v === 0), i solve thanks to copilot
          if (matrix[x] && matrix[x][y] === true && !(h === 0 && v === 0)) {
            minesCounterInJ += 1;
          }
        }
      }
      newMatrix[i][j] = minesCounterInJ;
    }
  }
  return newMatrix;
}

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];
console.log(solution(matrix));
