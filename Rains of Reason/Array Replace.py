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

def alternative_solution(inputArray: list, elementToReplace: int, substitutionElement: int):
    return [substitutionElement if x == elementToReplace else x for x in inputArray]

print(alternative_solution(inputArray, 1, substitutionElement=3))