{
  function solution(inputString: string): boolean {
    return inputString === inputString.split('').reverse().join('');
  }
}
