from Minesweeper import solution

def test_minesweeper():
    matrix = [[True, False, False],
          [False, True, False],
          [False, False, False]]
    assert solution(matrix) == [[1, 2, 1],
                                [2, 1, 1],
                                [1, 1, 1]]
          