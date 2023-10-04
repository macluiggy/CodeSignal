function solution(a: number[]): number[] {
  const sorted = a.filter((num) => num !== -1).sort((a, b) => a - b);
  let index = 0;
  return a.map((num) => {
    if (num === -1) {
      return num;
    } else {
      return sorted[index++];
    }
  });
}
