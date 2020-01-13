var climbStairs = function(n) {
    if (n===1) return 1;
    if (n === 2) return 2;
    
    const table = new Array(n + 1).fill(1);
    
    for (let i = n - 2; i >= 0; i--) {
        table[i] = table[i+1] + table[i+2];
    }
    
    return table[0];
};
