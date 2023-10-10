def solution(inputArray: list) -> int:
    i = 1
    while True:
        if all([x % i != 0 for x in inputArray]):
            return i
        i += 1

