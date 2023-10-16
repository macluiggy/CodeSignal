/**
 *
 * @param {string} inputString
 */
function solution(inputString) {
  let outputString = "";
  const inputArr = inputString.split("");
  for (let i = 0; i < inputArr.length; i++) {
    const inputChar = inputArr[i];
    if (inputChar == "z") {
      outputString += "a";
      continue;
    }
    const code = inputChar.charCodeAt();
    const outputChar = String.fromCharCode(code + 1);
    outputString += outputChar;
  }
  return outputString;
}

console.log(solution("zabc"));
