function solution(statues: number[]): number {
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}
