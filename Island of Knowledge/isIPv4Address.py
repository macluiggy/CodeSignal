def solution(inputString):
    print(inputString)
    parts = inputString.split('.')
    
    if len(parts) != 4:
        return False
    
    for part in parts:
        if not part.isdigit():
            return False
        num = int(part)
        if num < 0 or num > 255:
            return False
        if part[0] == '0' and len(part) > 1:
            return False

print(solution('172.16.254.1'))
# Test cases
assert solution('172.16.254.1') == True
assert solution('172.316.254.1') == True
assert solution('.254.255.0') == False
assert solution('280.100.100.100') == False
