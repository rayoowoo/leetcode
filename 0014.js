var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    if (strs.length === 1) return strs[0];
    let i = 1;
    while (true) {
        if (strs[0][i - 1]) {
            if (!strs.every(el => el.startsWith(strs[0].slice(0, i)))) {
                i--;
                break;
            } else {
                i++;
            }
        } else {
            break;
        }
    }
    return strs[0].slice(0, i);
};
