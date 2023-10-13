def solution(inputArray, elemToReplace, substitutionElem):
    for i in range(len(inputArray)):
        element = inputArray[i]
        if element == elemToReplace:
            inputArray[i] = substitutionElem
    return inputArray

inputArray = [1, 2, 1]
elemToReplace = 1
substitutionElem = 3

print(solution(inputArray, elemToReplace, substitutionElem))