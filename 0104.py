class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0
        
        if root.left is None and root.right is None:
            return 1
        
        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)
        
        if left > right:
            return 1 + left
        else:
            return 1 + right
