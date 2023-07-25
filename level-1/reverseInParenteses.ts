function solution(inputString: string): string {
    let result = inputString;
    while (result.includes('(')) {
        result = result.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return result;
}