var plusOne = function(digits) {
    let carry = 0;
    digits[digits.length - 1]++;
    for (let i = digits.length - 1; i >=0 ;i--) {
        const newDigit = digits[i] + carry;
        if (newDigit === 10) {
            digits[i] = 0;
            carry = 1;
            if (i === 0) {
                digits.unshift(1);
                return digits;
            }
        } else {
            digits[i] = newDigit;
            carry = 0;
        }
        
    }
    
    return digits;
};
