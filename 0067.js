var addBinary = function(a, b) {
    const maxLength = Math.max(a.length, b.length);
    while (a.length < maxLength) {
        a = "0" + a;
    }
    while (b.length < maxLength) {
        b = "0" + b;
    }

    let carry = false;
    let result = "";
    for (let i = a.length - 1; i >= 0 ; i--) {
        let digit = "";
        if (a[i] === "1" && b[i] === "1") {
            digit = "0";
            if (carry) digit = "1";
            carry = true;
        } else if (a[i] !== b[i]) {
            digit = "1";
            if (carry) {
                digit = "0";
                carry = true;
            } else {
                carry = false;
            }
        } else {
            digit = "0";
            if (carry) digit = "1";
            carry = false;
        }
        result = digit + result;
    }
    
    if (carry) return "1" + result;
    
    return result;
};
