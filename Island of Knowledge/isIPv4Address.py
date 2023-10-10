def solution(inputString):
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
