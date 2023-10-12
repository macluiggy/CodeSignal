def solution(image):
    return [
        [
            int(sum([image[i + x][j + y] for x in [-1, 0, 1] for y in [-1, 0, 1]]) / 9)
            for j in range(1, len(image[0]) - 1)
        ]
        for i in range(1, len(image) - 1)
    ]
