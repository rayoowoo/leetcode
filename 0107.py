class Solution(object):
    def levelOrderBottom(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        
        if root is None:
            return []
        
        queue = [root]
        n = 1
        traversal = [[]]
        
        while len(queue) > 0:
            check = queue[0]
                
            if len(traversal[0]) < n: 
                queue.pop(0)
                traversal[0].append(check.val) 
            else:
                n = len(queue)
                queue.pop(0)
                traversal.insert(0, [check.val])
                
            if check.left is not None:
                queue.append(check.left)
            if check.right is not None:
                queue.append(check.right)
                    
        return traversal
