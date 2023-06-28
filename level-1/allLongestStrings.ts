const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
function solution(inputArray: string[]): string[] {
  // 1. Find the longest string
  let longestString = "";
  for (let i = 0; i < inputArray.length; i++) {
    const currentString = inputArray[i];
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }
  // 2. Find all strings that are the same length as the longest string
  const longestStrings = [];
  for (let i = 0; i < inputArray.length; i++) {
    const currentString = inputArray[i];
    if (currentString.length === longestString.length) {
      longestStrings.push(currentString);
    }
  }
  return longestStrings;
}

console.log(solution(inputArray));