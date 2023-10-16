
/**
 * Determines if two given chess board cells are of the same color.
 * @param {string} cell1 - The first cell, represented as a string in the format "A1".
 * @param {string} cell2 - The second cell, represented as a string in the format "A1".
 * @returns {boolean} - True if both cells are of the same color, false otherwise.
 */
export function solution(cell1, cell2) {
  [cell1, cell2] = [cell1.toLowerCase(), cell2.toLowerCase()];
  const aceg = "aceg";
  const bdfg = "bdfh";
  const [letter1, number1] = cell1.split("");
  const [letter2, number2] = cell2.split("");
  let color1 = "";
  let color2 = "";
  if (aceg.includes(letter1)) {
    color1 = number1 % 2 == 0 ? "light" : "dark";
  }
  if (aceg.includes(letter2)) {
    color2 = number2 % 2 == 0 ? "light" : "dark";
  }
  if (bdfg.includes(letter1)) {
    color1 = number1 % 2 == 0 ? "dark" : "ligth";
  }
  if (bdfg.includes(letter2)) {
    color2 = number2 % 2 == 0 ? "dark" : "ligth";
  }
  return color1 == color2;
}

console.log(solution("A1", "C3"));
console.log(solution("A1", "H3"));

// // more performance solution:
// /**
//  *
//  * @param {string} cell1
//  * @param {string} cell2
//  */
// export function solution(cell1, cell2) {
//   function getColor(cell) {
//         let col = cell[0].charCodeAt() - 'A'.charCodeAt() + 1; // Convert letter to number (A=1, B=2, ...)
//         let row = parseInt(cell[1]);
        
//         // Return true for white and false for black
//         return (col + row) % 2 === 0;
//     }
    
//     // Check if both cells have the same color
//     return getColor(cell1) === getColor(cell2);
// }