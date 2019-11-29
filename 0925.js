function letterArr(word) {
    const arr = [word[0]]
    for (let i = 1; i < word.length; i++) {
        if (arr[arr.length - 1].includes(word[i])) {
            arr[arr.length - 1] = arr[arr.length - 1] + word[i]
        } else {
            arr.push(word[i])
        }
    }
    return arr;
}

var isLongPressedName = function(name, typed) {
    if (name === typed) return true;
    const nameArr = letterArr(name);
    const typedArr = letterArr(typed);
    
    if (nameArr.length !== typedArr.length) return false;
    for (let idx = 0; idx < nameArr.length; idx++) {
        if (!typedArr[idx].includes(nameArr[idx])) return false;
    }
    return true;
};
