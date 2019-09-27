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