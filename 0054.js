var spiralOrder = function(matrix) {
    if (!matrix.length) return [];
    const firstRow = 0;
    const firstIdx = 0;
    const lastRow = matrix.length - 1;
    const lastIdx = matrix[0].length - 1;
    
    function calc(start, end, first, last) {
        if (end < start) return [];
        if (last < first) return [];
        if (start === end) return matrix[start].slice(first, last + 1);
        let results = [];
        
        results = results.concat(matrix[start].slice(first, last + 1));
        for (let i = start + 1; i < end; i++) {
            results.push(matrix[i][last]);
        }
       
        results = results.concat(matrix[end].slice(first, last + 1).reverse());
        
        if (last > first) {
            for (let j = end - 1; j > start; j--) {
                results.push(matrix[j][first])
            }
        }
        return results.concat(calc(start + 1, end - 1, first + 1, last - 1));
    }
    
    return calc(firstRow, lastRow, firstIdx, lastIdx)
};
