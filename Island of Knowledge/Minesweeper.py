def solution(matrix):
  numRows = len(matrix)
  numCols = len(matrix[0])
  newMatrix = [[0 for j in range(numCols)] for i in range(numRows)]

  rowIndexOffsets = [-1, 0, 1]
  for i in range(len(newMatrix)):
    for j in range(len(newMatrix[i])):
      minesCounterInJ = 0
      for k in range(len(rowIndexOffsets)):
        h = rowIndexOffsets[k]
        for l in range(len(rowIndexOffsets)):
          v = rowIndexOffsets[l]
          x = i + h
          y = j + v
          if (
            x >= 0
            and x < numRows
            and y >= 0
            and y < numCols
            and matrix[x][y] == True
            and not (h == 0 and v == 0)
          ):
            minesCounterInJ += 1
      newMatrix[i][j] = minesCounterInJ

  return newMatrix
