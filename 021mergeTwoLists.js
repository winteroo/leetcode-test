/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    console.log('l2:', l2);
    return l2;
  }
  if (l2 === null) {
    console.log('l1:', l1);
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    console.log('l1:', l1);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    console.log('l2:', l2);
    return l2;
  }
};

/** *****************************构造链表结构 **********************/
function ListNode (val) {
  this.val = val;
  this.next = null;
}

function LinkedList () {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype.push = function (el) {
  const node = new ListNode(el);
  let current = null;
  if (this.head == null) {
    this.head = node;
  } else {
    current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

const list1 = [1, 3, 5];
const list2 = [2, 4, 6];
const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();
let i = 0;
while (i < list1.length) {
  linkedList1.push(list1[i]);
  i++;
}
let j = 0;
while (j < list2.length) {
  linkedList2.push(list2[j]);
  j++;
}

console.log(linkedList1);
console.log(linkedList2);

/** *****************************构造链表结构 **********************/

console.log(mergeTwoLists(linkedList1.head, linkedList2.head));
