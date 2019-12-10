var lengthOfLastWord = function(s) {
    s = s.split(" ").filter(el => el.length)
    if (!s.length) return 0;
    return s[s.length - 1].length;
};
