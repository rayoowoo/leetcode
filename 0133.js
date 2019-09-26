var cloneGraph = function(tree) {
    const visited = new Set();
    visited.add(tree);
    const root = new Node(tree.val, []);
    root.neighbors.push(_iterate(tree.neighbors[0], root))
    
    
    function _iterate(node, prev) {
        const newNode = new Node(node.val, [prev]);
        let nextOne;
        if (visited.has(node.neighbors[0]) && visited.has(node.neighbors[1])) {
            newNode.neighbors.push(root);
        } else {
            visited.add(node);
            if (visited.has(node.neighbors[0])) {
                nextOne = node.neighbors[1];
            } else {
                nextOne = node.neighbors[0];
            }
            newNode.neighbors.push(_iterate(nextOne, newNode));
        }
        return newNode;
    }
    return root;
};