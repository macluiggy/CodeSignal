{
  function solution(inputArray: number[]): number {
    let maxProduct = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
      maxProduct = Math.max(maxProduct, inputArray[i] * inputArray[i + 1]);
    }
    return maxProduct;
  }
}
