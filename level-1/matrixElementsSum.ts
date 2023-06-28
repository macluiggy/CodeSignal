const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function solution(matrix: number[][]): number {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const num = row[j];
      if (num === 0) {
        for (let k = i; k < matrix.length; k++) {
          matrix[k][j] = 0;
        }
      }

      sum += num;
    }
  }

  return sum;
}
console.log(solution(matrix));

