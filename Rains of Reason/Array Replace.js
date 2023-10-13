function solution(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i];
    if (element === elemToReplace) {
      inputArray[i] = substitutionElem
    }
  }
  return inputArray;
}

let inputArray = [1, 2, 1];
let elemToReplace = 1;
let substitutionElem = 3;

console.log(solution(inputArray, elemToReplace, substitutionElem));
