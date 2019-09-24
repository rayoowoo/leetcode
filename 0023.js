const mergeKLists = function (lists) {
    if (lists.every(el => !el)) return null;

    let min = Infinity;
    let idx;
    lists.forEach((el, i) => {
        if (el) {
            if (el.val < min) {
                idx = i;
                min = el.val;
            }
        }
    });
    const newNode = new ListNode(lists[idx].val);
    lists[idx] = lists[idx].next;
    newNode.next = mergeKLists(lists);
    return newNode;
};