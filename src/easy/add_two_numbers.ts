class ListNode {
    public _value: number = 0;
    public _next: ListNode | null = null;
    constructor(value: number, next?: ListNode | null) {
        this._value = value;
        this._next = this._next
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry: number = 0;
    let temp = new ListNode(0, null);
    let head = temp;
    while (l1 != null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1._value : 0;
        const val2 = l2 ? l2._value : 0;
        
        let sum = val1 + val2 + carry;
        let digit = (sum % 10); // Needs further explanation.
        carry = Math.floor(sum / 10); // Why this always works ?
        head._next = new ListNode(digit,null);
        
        if(l1) l1 = l1._next;
        if(l2) l2 = l2._next
    }

    return temp._next;
}

/**
 * Initialize:

carry = 0

A dummy head for the result list

While:

l1 exists OR

l2 exists OR

carry !== 0

Read values:

val1 = l1 ? l1.val : 0

val2 = l2 ? l2.val : 0

Compute:

sum = val1 + val2 + carry

digit = sum % 10

carry = Math.floor(sum / 10)

Create a new node with digit

Move forward
 */