function solution(n: number): boolean {
  const stringNum = n.toString();
  const half1 = stringNum.split("").slice(0, stringNum.length / 2);
  const half2 = stringNum.split("").slice(stringNum.length / 2);
  const sum1 = half1.reduce((acc, curr) => acc + parseInt(curr), 0);
  const sum2 = half2.reduce((acc, curr) => acc + parseInt(curr), 0);
  return sum1 === sum2;
}

console.log(solution(1231));
