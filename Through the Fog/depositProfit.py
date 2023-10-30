def solution(deposit, rate, threshold, year=0):
    if deposit >= threshold:
        return year
    return solution(deposit * (1 + rate / 100), rate, threshold, year + 1)

print(solution(100, 20, 170))