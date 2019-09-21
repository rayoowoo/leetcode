// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string, find the length of the longest substring without repeating characters.

function longest(string) {
    if (!string) return 0;
    const letters = string.split("");
    for (let idx = 1; idx < string.length; idx++) {
        if (!letters[idx - 1].includes(letters[idx])) {
            letters[idx] = letters[idx - 1] + letters[idx];
        } else {
            let i = idx - 1;
            while (string[i] !== letters[idx][letters[idx].length-1] && i >= 0) {
                letters[idx] = string[i] + letters[idx];
                i--;
            }
        }
        console.log(letters);
    }

    return letters.reduce( (long, el) => {
        if (long.length < el.length) return el;
        return long;
    })
}