class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head == None:
            return None
        
        node = head;
        
        while node != None:
            if node.next != None:
                while node.next.val == node.val:
                    node.next = node.next.next
                    if node.next == None:
                        break
            node = node.next
        
        return head
