var isPalindrome = function(x) {
//     string conversion
    // const numString = x.toString();
    // for (let i = 0; i < numString.length / 2; i++) {
    //     if (numString[i] !== numString[numString.length - i - 1]) return false;
    // }
    // return true;
    
//     without string conversion
    if (x < 0) return false;
    if (x < 10) return true;
    
    let xNums = [];
    let y = [];
    
    while (x > 0) {
        if (x >= 10) {
            y.push(x % 10);
            xNums.unshift(x % 10);
            x = Math.floor(x / 10);
        } else {
            y.push(x);
            xNums.unshift(x);
            break;
        }
    }
    
    for (let i = 0; i < xNums.length; i++) {
        if (xNums[i] !== y[i]) return false;
    }
    return true;
};
