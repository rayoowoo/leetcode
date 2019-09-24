var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;

    let newNode;
    if (!l2 && l1) {
        newNode = new ListNode(l1.val);;
        l1 = l1.next;
    } else if (!l1 && l2) {
        newNode = new ListNode(l2.val);
        l2 = l2.next;
    } else if (l1.val < l2.val) {
        newNode = new ListNode(l1.val);;
        l1 = l1.next;
    } else if (l1.val >= l2.val) {
        newNode = new ListNode(l2.val);
        l2 = l2.next;
    }

    newNode.next = mergeTwoLists(l1, l2);
    return newNode;
};