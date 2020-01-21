class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0

        queue = [root]
        n = 1
        number = 0
        depth = 1
        
        while (len(queue) > 0):
            check = queue[0]
            if number < n:
                number += 1
            else:
                number = 1
                n = len(queue)
                depth += 1
            
            queue.pop(0)
            
            if check.left is None and check.right is None:
                return depth
            
            if check.left is not None:
                queue.append(check.left)
            if check.right is not None:
                queue.append(check.right)
                
        
