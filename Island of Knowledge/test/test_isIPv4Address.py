import pytest
from isIPv4Address import solution

# def test_valid_ipv4_addresses():
#     assert solution("172.16.254.1") == True
#     assert solution("192.0.2.0") == True
#     assert solution("0.0.0.0") == True
#     assert solution("255.255.255.255") == True

# def test_invalid_ipv4_addresses():
#     assert solution("") == False
#     assert solution("172.16.254.01") == False
#     assert solution("172.16.254.1.1") == False
#     assert solution("172.16.254") == False
#     assert solution("172.16.254.abc") == False
#     assert solution("172.16.254.256") == False