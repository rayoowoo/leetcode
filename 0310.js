function findHeight(n, edges, startNode) {
    let count = 0;
    let nodes = [startNode]
    while (nodes.length < n) {
        count++;
        nodes.forEach(node => {
            edges = edges.filter(edge => {
                if (edge.includes(node)) {
                    nodes.push(edge.filter(el => el !== node)[0]);
                    return false;
                } else {
                    return true;
                }
            })
        })
    }
    return count;
}

var findMinHeightTrees = function (n, edges) {
    let minHeight = Infinity;
    let minRoots = [];
    for (let i = 0; i < n; i++) {
        const attempt = findHeight(n, edges, i);
        if (attempt < minHeight) {
            minRoots = [i];
            minHeight = attempt;
        } else if (attempt === minHeight) {
            minRoots.push(i);
        }
    }

    return minRoots;

};

// someone else's solution:
// https://leetcode.com/problems/minimum-height-trees/discuss/233891/Concise-Javascript

var findMinHeightTrees = function (n, edges) {
    let nodes = {};
    for (let i = 0; i < n; i++) nodes[i] = new Set();
    for (let [a, b] of edges) {
        nodes[a].add(b);
        nodes[b].add(a);
    }

    while (Object.keys(nodes).length > 2) {
        Object.keys(nodes).filter(v => nodes[v].size < 2).forEach(v => {
            nodes[v].forEach(nextv => {
                nodes[nextv].delete(parseInt(v))
            });
            delete nodes[v];
        })
    }

    return Object.keys(nodes);
};