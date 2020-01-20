var numDecodings = function (s) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    const letters = "abcdefghijklmnopqrstuvwxyz";

    const code = {};
    for (i of numbers) {
        code[i] = letters[i - 1]
    }

    function decode(s) {
        if (s[0] === "0") return 0;
        if (s.length <= 1) return 1;
        
        if ((s[0] === "1") || (s[0] === "2" && s[1] in ["0","1", "2", "3", "4", "5", "6"])) {
            return decode(s.slice(1)) + decode(s.slice(2))
        } else {
            return decode(s.slice(1));
        }
    }

    return decode(s);
};
