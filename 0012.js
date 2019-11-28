var intToRoman = function(num) {
    const numString = num.toString();
    let romanString = "";
    const convert = {
        "0": "",
        "1": "I",
        "5": "V",
        "10": "X",
        "50": "L",
        "100": "C",
        "500": "D",
        "1000": "M"
    }
    let divisor = 1000;
    while (num > 0) {
        const input = Math.floor(num / divisor);
        console.log(input * divisor);
        
        if (input >= 0 && input < 4) {
            for (let i = 0; i < input; i++) {
                romanString += convert[divisor];
            }
        } else if (input > 4 && input < 9) {
            romanString += convert[5 * divisor];
            for (let i = 0; i < input - 5; i++) {
                romanString += convert[divisor];
            }
        } else if (input === 4) {
            if (divisor === 100) romanString += "CD";
            if (divisor === 10) romanString += "XL";
            if (divisor === 1) romanString += "IV";
        } else {
            if (divisor === 100) romanString += "CM";
            if (divisor === 10) romanString += "XC";
            if (divisor === 1) romanString += "IX";
        }
        
        num = num % divisor;
        divisor /= 10;
    }
    
    return romanString;
};
