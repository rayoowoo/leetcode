class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        if head is None:
            return False
        
        nodes = []
        
        while head.next is not None:
            if head in nodes:
                return True
            nodes.append(head)
            head = head.next
            
        return False
        
