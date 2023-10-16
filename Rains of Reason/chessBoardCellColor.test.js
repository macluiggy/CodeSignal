import { solution } from "./chessBoardCellColor.js";

// Test case 1
let cell1 = "A1";
let cell2 = "C3";
let expectedOutput = true;
let result = solution(cell1, cell2);
console.assert(result === expectedOutput, {result, expectedOutput});

// Test case 2
cell1 = "A1";
cell2 = "H3";
expectedOutput = false;
result = solution(cell1, cell2);
console.assert(result === expectedOutput, {result, expectedOutput});

// Test case 3
cell1 = "B2";
cell2 = "D4";
expectedOutput = true;
result = solution(cell1, cell2);
console.assert(result === expectedOutput, {result, expectedOutput});

// Test case 4
cell1 = "B2";
cell2 = "E5";
expectedOutput = false;
result = solution(cell1, cell2);
console.assert(result === expectedOutput, {result, expectedOutput});