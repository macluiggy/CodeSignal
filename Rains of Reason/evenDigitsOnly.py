def solution(n: str):
    nArr = list(map(int, str(n)))
    return len(list(filter(lambda x: x % 2 == 0, nArr))) == len(nArr)
