/**
 *
 * @param {number[]} a
 */
function solution(a) {
  let minimalAbsoluteSum;
  let x;
  for (let i = 0; i < a.length; i++) {
    const el = a[i];
    const absSum = a.reduce(
      (acumulator, currentValue, currentIndex, array) =>
        Math.abs(el - currentValue) + acumulator,
      0
    );
    if (minimalAbsoluteSum === undefined) {
      minimalAbsoluteSum = absSum;
      x = el;
      continue;
    }
    if (absSum < minimalAbsoluteSum) {
      minimalAbsoluteSum = absSum;
      x = el;
    }
  }
  
  return x
}

const a = [2, 4, 7];

console.log(solution(a)); // should be 4
