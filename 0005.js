// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.

function longestPalindrome(s) {
    if (!s) return "";
    let longest = s[0]
    for (let i = 1; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            const word = s.slice(j, i + 1);
            if (isPalin(word) && word.length > longest.length) {
                longest = word;
                break;
            }
        }
    }
    return longest;
};

function isPalin(word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - i - 1]) return false;
    }
    return true;
}