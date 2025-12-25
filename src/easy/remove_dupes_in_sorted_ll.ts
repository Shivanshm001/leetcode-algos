class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val: number, next: ListNode | null){
        this.val = val ?? 0;
        this.next = next;
    }
};

function removeDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return null;
    let current = head;

    while(current && current.next){
        if(current.val === current.next?.val){
            current.next = current.next.next
        }
        else {
            current = current.next;
        }
    }

    return head
}