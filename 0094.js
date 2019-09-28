var inorderTraversal = function (root) {
    // recursive solution (trivial)
    // if (!root) return [];
    // return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));

    // iterative solution
    if (!root) return [];
    let traversal = [root];
    let attempt = true;
    while (attempt) {
        attempt = false;
        const newTraversal = [];
        traversal.forEach(el => {
            if (el instanceof TreeNode) {
                attempt = true;
                newTraversal.push(el.left);
                newTraversal.push(el.val);
                newTraversal.push(el.right);
            } else {
                newTraversal.push(el);
            }
        })
        traversal = newTraversal.filter(el => !!el);
    }
    return traversal;


};