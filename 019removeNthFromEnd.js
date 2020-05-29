function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
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
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description
 * 暴力两遍链表
 * 第一遍获取链表的长度
 * 第二遍找到指定位置的指针操作
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 设置哑结点，防止删除首节点
  let noNode = new ListNode(-1);
  noNode.next = head;
  // 链表长度
  let len = 0;
  let temp = noNode;
  while (temp.next) {
    len++;
    temp = temp.next;
  }
  temp = noNode;
  let i = 0;
  let ansi = len - n
  while (i < ansi) {
    temp = temp.next;
    i++;
  }
  temp.next = temp.next.next;
  return noNode.next;
};


let list = [1, 2, 3, 4, 5];
let linkedList = new LinkedList();
let i = 0;
while (i < list.length) {
  linkedList.push(list[i]);
  i++;
}

console.log(linkedList);
let target = 2;
// console.log(removeNthFromEnd(linkedList.head, target));



/**
 * @description
 * 双指针同时移动
 * 设置前后指针
 * 前指针指向链表的首个节点
 * 后指针指向与前指针相距n的节点
 * 前后指针同时移动
 * 直到后指针到达链表的尾部
 * 此时前指针指向的就是链表的倒数第n个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndElse = function (head, n) {
  // 设置哑结点，防止删除首节点
  let noNode = new ListNode(-1);
  noNode.next = head;
  let first = noNode;
  let end = noNode;
  let i = 0;
  while (i < n) {
    end = end.next;
    i++;
  }
  while (end.next) {
    first = first.next;
    end = end.next;
  }
  first.next = first.next.next;
  return noNode.next;
}

console.log(removeNthFromEndElse(linkedList.head, target));