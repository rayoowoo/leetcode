var sortList = function(head) {
//     n log n is most likely a merge sort. but maybe not.
//     put each node into an array, merge sort them, and then link them as a linked list. return the linked list head. 
//     n^2 would be to bubble sort the list, which is pretty easy. 
//     i can create two lists, just alternating one at a time, changing pointers. 
    if (!head) return null;
  if (!head.next) return head;
    
    const head1 = head;
    const head2 = head.next;
    let list1 = head;
    let list2 = head.next;
    head = head.next.next;
    let which = 1;
    while (head) {
        if (which === 1) {
            list1.next = head;
            list1 = list1.next;
        } else {
            list2.next = head;
            list2 = list2.next;
        }
        head = head.next;
        which = which === 1? 2 : 1;
    }

    if (list1.next) list1.next = null;
    if (list2.next) list2.next = null;

    return merge(sortList(head1), sortList(head2))
};

function merge(node1, node2) {
    let head = null;
    let prev = null;
    
    while (node1 && node2) {
        if (node1.val < node2.val) {
            if (!head) head = node1;
            if (!prev) {
                prev = node1;
            } else {
                prev.next = node1;
                prev = node1;
            }
            node1 = node1.next;
        } else {
            if (!head) head = node2;
            if (!prev) {
                prev = node2;
            } else {
                prev.next = node2;
                prev = node2;
            }
            node2 = node2.next;
        }
    }
    const rest = node1 ? node1 : node2;
    
    prev.next = rest;
    
    return head;
}
