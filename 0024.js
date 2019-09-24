const swapPairs = function (head, place = 0) {
    if (!head) {
        return head;
    }
    if (!place) {
        let newHead = head.next;
        if (newHead) {
            head.next = newHead.next;
            newHead.next = swapPairs(head, place = 1);
            head = newHead;
        }
    } else {
        head.next = swapPairs(head.next, place = 0);
    }

    return head;
};