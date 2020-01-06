var rotate = function(matrix) {
    combinations(matrix.length).forEach(pos => swap(matrix, pos));
    matrix.map(el => el.reverse())
};

function combinations(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i !== j) results.push([i, j])
        }
    }
    return results;
}

function swap(matrix, pos) {
    const [x, y] = pos;
    [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]]
}

