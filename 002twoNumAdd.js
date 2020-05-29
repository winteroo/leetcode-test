/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description 两数相加，链表相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function (l1, l2) {
  let result = new ListNode(null);
  let nextRst = result;
  // 进位
  let params = 0 // 传给下一个层级的值
  let val = 0 // 传给当前层级的值

  while (l1 != null || l2 != null) {
    // TODO
    let x = (l1 != null) ? l1.val : 0;
    let y = (l2 != null) ? l2.val : 0;

    val = (x + y + params) % 10;
    params = Math.floor((x + y + params) / 10);

    nextRst.next = new ListNode(val)
    nextRst = nextRst.next

    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next

  }

  if (params) {
    nextRst.next = new ListNode(params)
  }

  return result.next
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
  this.push = push;
}

const push = function (el) {
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
}

let nodeList1 = new LinkedList();
let nodeList2 = new LinkedList();

let arr1 = [2, 3, 4];
let arr2 = [5, 6, 4];

for (let i = 0; i < arr1.length; i++) {
  nodeList1.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  nodeList2.push(arr2[i]);
}

console.log(nodeList1);
console.log(nodeList2);

console.log(addTwoNumbers(nodeList1.head, nodeList2.head));