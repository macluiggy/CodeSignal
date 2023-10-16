def solution(inputString):
    outputString = ""
    for inputChar in inputString:
        if inputChar == "z":
            outputString += "a"
            continue
        code = ord(inputChar)
        outputChar = chr(code + 1)
        outputString += outputChar
    return outputString

print(solution("zabc"))