var isValidBST = function(root,  lessThan = [], greaterThan = []) {
    if (!root) return true;
    if (lessThan.length) {
        if (!lessThan.every(el => el > root.val)) return false;
    }
    if (greaterThan.length) {
        if (!greaterThan.every(el => el < root.val)) return false;
    }

    let leftResult = rightResult = true;
    if (root.left) {
        leftResult = isValidBST(root.left, lessThan.concat([root.val]), greaterThan)
    }
    if (root.right) {
        rightResult = isValidBST(root.right, lessThan, greaterThan.concat([root.val]))
    }

    return leftResult && rightResult;   
};
