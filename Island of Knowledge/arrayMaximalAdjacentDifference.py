def solution(inputArray: list):
    # store the maximum difference starting with 0
    maximumDifference = 0
    # iterate through the array
    for i in range(len(inputArray) - 1):
        # get the difference between the current and the next element
        difference = abs(inputArray[i] - inputArray[i + 1])
        # if the difference is greater than the current maximum difference
        if difference > maximumDifference:
            # store the difference as the maximum difference
            maximumDifference = difference
    # return the maximum difference
    return maximumDifference