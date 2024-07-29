// 节点类
class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  // 向链表尾部添加一个新元素
  push (el) {
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

  // 向链表的特定位置插入元素
  insert (el, position) {
    const node = new Node(el);
    if (!this.head) {
      this.head = node;
    } else {
      if (position > this.length) {
        position = this.length;
      }
      let i = 1;
      let current = this.head;
      while (i < position) {
        current = current.next;
        i++;
      }
      node.next = current.next;
      current.next = node;
    }
    this.length++;
    return this.head;
  }

  // 获取指定位置处的元素
  getElementAt (index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }
    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  // 移除元素
  remove (index) {
    if (index < 0 || index >= this.length) {
      return this.head;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.head;
    }
    const preNode = this.getElementAt(index - 1);
    const current = preNode.next;
    preNode.next = current.next;
    this.length--;
    return this.head;
  }

  // 返回元素在链表中的索引
  indexOf (val) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.value === val) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 判断链表是否为空
  isEmpty () {
    return this.length === 0;
  }

  // 判断链表的长度
  size () {
    return this.length;
  }

  // toString方法
  toString () {
    let current = this.head;
    const stack = [];
    for (let i = 0; i < this.length; i++) {
      if (typeof current.value === 'object') {
        stack.push(`${JSON.stringify(current.value)}`);
      } else {
        stack.push(`${current.value.toString()}`);
      }
      current = current.next;
    }
    return stack.join('->');
  }
}

const list = new LinkedList();

console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push([1, 2, 3]));
console.log(list.push({ a: 0 }));

// console.log(list.insert(4, 9));
// console.log(list.insert(4, 1));

console.log(list.getElementAt(1));

// console.log(list.remove(0));
// console.log(list.remove(1));

console.log(list.indexOf(3));
console.log(list.indexOf(0));

console.log(list.toString());
