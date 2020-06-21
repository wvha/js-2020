/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


/*

set next = null;

for each ...
need to set temp = this.next
this.next = next
next = this (node)

this node = temp

return next;

*/

// iterative solution
var reverseList = function(head) {

    let next = null;
    let current = head;
    
    while (current !== null) {
        let temp = current.next; 
        current.next = next;
        next = current;
        current = temp;
        
    }
    
    return next;
};
