const convert = function (s, numRows) {
    if (numRows === 1) return s;
    let length = numRows;
    const letters = [];
    while (s.length) {
        if (length === numRows) {
            if (s.length > length) {
                letters.push(s.slice(0, length));
                s = s.slice(length);
            } else {
                const strLength = s.length;
                for (let i = 0; i < length - strLength; i++) {
                    s = s + "%";
                }
                letters.push(s);
                s = "";
            }
            length = length - 2;
        } else {
            if (s.length > length) {
                let string = "%" + s.slice(0, length) + "%";
                letters.push(reverse(string));
                s = s.slice(length);
            } else {
                const strLength = s.length;
                for (let i = 0; i < length - strLength; i++) {
                    s = s + "%";
                }
                letters.push("%" + reverse(s) + "%");
                s = "";
            }
            length = length + 2;
        }
    }

    const result = []
    for (let row = 0; row < numRows; row++) {
        let string = "";
        letters.forEach(el => {
            if (el[row] !== "%") {
                string += el[row];
            }
        })
        result.push(string);
    }

    return result.join("")
};

function reverse(string) {
    return string.split("").reverse().join("");
}