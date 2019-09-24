const addTwoNumbers = function (node1, node2, carry = 0) {

    if (!node1 && !node2) {
        if (carry) {
            return new ListNode(1);
        }
        return null;
    }
    let val1 = val2 = 0;
    let next1 = next2 = null;
    if (node1) {
        val1 = node1.val;
        next1 = node1.next;
    }
    if (node2) {
        val2 = node2.val;
        next2 = node2.next;
    }
    let totalVal = val1 + val2 + carry;
    carry = 0;

    if (totalVal >= 10) {
        totalVal -= 10;
        carry = 1;
    }

    const newNode = new ListNode(totalVal)
    newNode.next = addTwoNumbers(next1, next2, carry);
    return newNode;

};