var countAndSay = function(n) {   
    if (n === 1) return "1";
    const prev = countAndSay(n - 1);
    
    let num = "";
    let count = 0;
    let says = "";
    
    for (let i = 0; i < prev.length + 1; i++) {
        if (num === prev[i]) {
            count++;
        } else {
            if (num) says += count.toString() + num;
            num = prev[i];
            count = 1;
        }
    }
    
    return says;
};
