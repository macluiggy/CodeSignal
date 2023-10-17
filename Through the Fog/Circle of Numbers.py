def solution(n, firstNumber):
    result = n // 2 + firstNumber
    return result if result <= n else result - n

print(solution(10, 6))