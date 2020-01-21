class Solution(object):
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root is None:
            return True
        
        def heights(node):
            if node is None:
                return 0
            
            left = heights(node.left)
            right = heights(node.right)
            
            if type(left) == bool:
                return left
            if type(right) == bool:
                return right
            
            if abs(left - right) <= 1:
                return 1 + max(left, right)
            else:
                return False
            
            
        return bool(heights(root))
