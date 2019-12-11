var letterCombinations = function(digits) {
    if (!digits.length) return [];
    const numberPad = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    
    let strings = numberPad[digits[0]];
    for (let i = 1; i < digits.length; i++) {
        const newStrings = [];
        strings.forEach(el => {
            numberPad[digits[i]].forEach(addition => {
                newStrings.push(el + addition);
            })
        })
        strings = newStrings;
    }
    return strings;
};
