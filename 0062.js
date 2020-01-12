var uniquePaths = function(m, n) {
    if (m === 1 && n === 1) return 1;
    
    const table = new Array(n).fill(new Array(m).fill(1))
    
    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            table[i][j] = table[i+1][j] + table[i][j+1];
        }
    }
    
    return table[0][0];
    
    
};
