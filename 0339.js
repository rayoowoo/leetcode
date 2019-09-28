// my incomplete solution
var calcEquation = function(equations, values, queries) {
    let divisions = {};
    let numbers = new Set();
    for (let i = 0; i < values.length; i++) {
        const [first, second] = equations[i];
        numbers.add(first);
        numbers.add(second);
        if (!divisions[first]) divisions[first] = {};
        if (!divisions[second]) divisions[second] = {};
        divisions[first][second] = values[i];
        divisions[second][first] = 1 / values[i];
    }
    
    console.log(divisions);
    
    function calculate(start, end) {
        const visited = new Set();
        const queue = [start];
        let answer = 1;
        while (queue.length) {
            const check = queue.shift();
            if (!visited.has(check)) {
                if (check === end) return answer;
                visited.add(check);
                answer *= check * divisions[start][check];
                if (divisions[start]) {
                    divisions.forEach( el => queue.push(el));
                }
            }
        }
        return -1;
    }
    
    const result = [];
    
    queries.forEach(query => {
        if (!query.every(el => numbers.has(el))) {
            result.push(-1.0);
        } else if (query.every(el => query[0])) {
            result.push(1.0);
        } else{
            result.push(calculate(...query));
        }
    })
    
    return result;
};

// solution from: https://leetcode.com/problems/evaluate-division/discuss/214888/Readable-Javascript-Solution

var calcEquation = function (equations, values, queries) {
    let neighbors = {};

    equations.forEach(([nom, denom], idx) => {
        const curValue = values[idx];
        neighbors[nom] = neighbors[nom] || [];
        neighbors[nom].push([denom, curValue]);

        neighbors[denom] = neighbors[denom] || [];
        neighbors[denom].push([nom, 1 / curValue]);
    });

    let result = [];
    for (let query of queries) {
        result.push(evaluate(query, neighbors));
    }

    return result;
};

function evaluate(query, neighbors) {
    const [nom, denom] = query;
    if (!(nom in neighbors) || !(denom in neighbors)) return -1;
    if (nom === denom) return 1;

    let queue = neighbors[nom].slice();
    let visited = new Set();

    while (queue.length) {
        const [variable, value] = queue.shift();

        if (variable === denom) return value;
        visited.add(variable);

        const next = neighbors[variable];
        next.forEach(([next, nextValue]) => {
            if (visited.has(next)) return;
            queue.push([next, nextValue * value]);
        });
    }

    return -1;