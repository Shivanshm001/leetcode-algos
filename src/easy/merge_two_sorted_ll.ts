class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val: number, next: ListNode | null) {
        this.val = val;
        this.next = next;
    };
};


function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, null);
    let head = dummy;

    while (l1 && l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        if (val1 < val2) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }

    if (l1) {
        head.next = l1;
    } else {
        head.next = l2
    }
    return dummy.next;
}