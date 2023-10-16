# First solution
def solution(cell1, cell2):
    cell1, cell2 = cell1.lower(), cell2.lower()
    aceg = "aceg"
    bdfg = "bdfh"
    letter1, number1 = cell1
    letter2, number2 = cell2
    color1 = ""
    color2 = ""
    if letter1 in aceg:
        color1 = "light" if int(number1) % 2 == 0 else "dark"
    if letter2 in aceg:
        color2 = "light" if int(number2) % 2 == 0 else "dark"
    if letter1 in bdfg:
        color1 = "dark" if int(number1) % 2 == 0 else "light"
    if letter2 in bdfg:
        color2 = "dark" if int(number2) % 2 == 0 else "light"
    return color1 == color2

print(solution("A1", "C3"))
print(solution("A1", "H3"))

# Second solution
def solution(cell1, cell2):
    def get_color(cell):
        col = ord(cell[0]) - ord('A') + 1  # Convert letter to number (A=1, B=2, ...)
        row = int(cell[1])
        # Return True for white and False for black
        return (col + row) % 2 == 0

    # Check if both cells have the same color
    return get_color(cell1) == get_color(cell2)

print(solution("A1", "C3"))
print(solution("A1", "H3"))