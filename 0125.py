class Solution:
    def isPalindrome(self, s: str) -> bool:
        alphanum = 'abcdefghijklmnopqrstuvwxyz1234567890'
        s = list(filter(lambda x: x in alphanum, s.lower()))
        return s == s[::-1]
