import re

def solution(name:str):
    return bool(re.match(r'^[a-z_]\w*$', name, re.IGNORECASE)) or bool(re.match(r'^[a-zA-Z_][a-zA-Z0-9_]*$', name))

print(solution('1dol'))