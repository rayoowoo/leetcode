class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root == None:
            return True
        
        def traverse(node, dir):
            if node == None:
                return []
            
            nodes = []
            queue = [node]
            
            while len(queue) > 0:
                check = queue.pop(0)
                if check != None:
                    nodes.append(check.val)
                    if dir == "left":
                        queue.append(check.left)
                        queue.append(check.right)
                    else:
                        queue.append(check.right)
                        queue.append(check.left)
                else:
                    nodes.append(check)
            return nodes
            
        left = traverse(root.left, "left")
        right = traverse(root.right, "right")

        
        return left == right
