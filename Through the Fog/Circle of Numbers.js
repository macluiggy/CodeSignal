/**
 *
 * @param {number} n
 * @param {number} firstNumber
 */
function solution(n, firstNumber) {
  const result = n / 2 + firstNumber;
  return result <= n ? result : result - n
}

console.log(solution(10, 6));
