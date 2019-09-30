// solution from https://leetcode.com/problems/unique-binary-search-trees-ii/discuss/151394/JavaScript-DFS-with-Memo

var generateTrees = function (n) {
    if (!n) return [];
    const memo = [...Array(n + 1)].map(subArr => Array(n + 1)); // memo object
    return _buildTrees(1, n);

    function _buildTrees(start, end) {
        if (start > end) return [null]; // how null nodes are generated
        if (memo[start][end]) return memo[start][end];

        const trees = [];
        for (let root = start; root <= end; root++) {
            for (let left of _buildTrees(start, root - 1)) { // generates all left subtrees, and then iterates through them
                for (let right of _buildTrees(root + 1, end)) { // generates all right subtrees, and then interates through them
                    const newTree = new TreeNode(root);
                    newTree.left = left;
                    newTree.right = right;
                    trees.push(newTree);
                }
            }
        }
        memo[start][end] = trees;
        return trees;
    }

};