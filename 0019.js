const removeNthFromEnd = function (head, n) {
    const nodes = [];
    let node = head;
    while (node) {
        nodes.push(node);
        node = node.next;
    }
    if (nodes.length === 1) return null;
    const length = nodes.length - n;
    const prev = nodes[length - 1];
    const toRemove = nodes[length];
    const next = toRemove.next;
    if (prev) prev.next = next;
    toRemove.next = null;
    if (head === toRemove) return next;
    return head;
};