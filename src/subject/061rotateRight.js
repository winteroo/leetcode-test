// 节点类
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 向链表尾部添加一个新元素
  push(el) {
    const node = new Node(el);
    if (this.head) {
      let nextNode = this.head;
      while (nextNode.next != null) {
        nextNode = nextNode.next;
      }
      nextNode.next = node;
      this.length++;
    } else {
      this.head = node;
      this.length++;
    }
    return this.head;
  }
}

const list = new LinkedList();

console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));
console.log(list.push(5));
console.log('*****************');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (k === 0 || head === null || head.next === null) return head;

  // 获取链表的长度
  const len = getLen(head);

  // 获取需要截取的位置
  const index = indexOf(k, len);

  // 获取截取位置前后的链表数据
  let [preList, remainList] = findList(head, index);

  // 将截取的前部分的链表放到后链表的尾部，即为所求
  let temp = remainList;

  if (temp === null) {
    remainList = preList;
  } else {
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = preList;
  }

  return remainList;

  function findList(head, index) {
    let current = head;
    let cur = head;
    let i = 0;
    let t = 1;
    while (i < index) {
      current = current.next;
      i++;
    }
    while (t < index) {
      cur = cur.next;
      t++;
    }
    // 后链表
    cur.next = null;
    return [head, current];
  }

  function getLen(list) {
    let len = 1;
    let temp = list;
    while (temp.next != null) {
      len++;
      temp = temp.next;
    }
    return len;
  }

  function indexOf(k, len) {
    // if (k < len) {
    //   return len - k;
    // }
    return len - (k % len);
  }
};

const head = list;

console.log(rotateRight(head.head, 2));
