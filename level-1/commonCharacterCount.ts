function solution(s1: string, s2: string): number {
  let s1Arr = s1.split("").sort();
  let s2Arr = s2.split("").sort();
  let count = 0;
  for (let i = 0; i < s1Arr.length; i++) {
    if (s2Arr.includes(s1Arr[i])) {
      count++;
      s2Arr.splice(s2Arr.indexOf(s1Arr[i]), 1);
    }
  }
  return count;
}

console.log(solution("aabcc", "adcaa"));
