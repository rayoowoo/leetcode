class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if root is None:
            return False
        
        if root.left is None and root.right is None and sum == root.val:
            return True
        
        if self.hasPathSum(root.left, sum - root.val):
            return True
        else:
            return self.hasPathSum(root.right, sum - root.val)
