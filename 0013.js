var romanToInt = function(s) {
    const convert = {
        "IV": 4, "IX": 9, "XL": 40, "XC": 90, "CD": 400,  "CM": 900, 
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const romans = ["IV", "IX", "XL", "XC", "CD", "CM", "I", "V", "X", "L", "C", "D", "M"];
    
    let sum = 0;
    while (s.length) {
        for (let i = 0; i < romans.length; i++ ) {
            el = romans[i];
            console.log(el);
            if (el.length == 2) {
                if (s.slice(0, 2) === el) {
                    sum += convert[el];
                    s = s.slice(2);
                    break;
                }                
            } else {
                if (s[0] === el) {
                    sum += convert[el];
                    s = s.slice(1);
                    break;
                }
            }
        }
    }
    return sum;
};
