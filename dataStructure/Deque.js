// 双端队列
class Deque {
  constructor() {
    this.deque = [];
  }

  // 在双端队列的前面添加新元素
  addFront (el) {
    this.deque.unshift(el);
    return this.deque;
  }

  // 在双端队列的尾部添加元素
  addBack(el) {
    this.deque.push(el);
    return this.deque;
  }

  // 移除队列前端的元素
  removeFront () {
    return this.deque.shift();
  }

  // 移除队列末尾元素
  removeBack () {
    return this.deque.pop();
  }

  // 返回队列首位元素
  peekFront() {
    return this.deque[0];
  }

  // 返回队列末尾元素
  peekBack() {
    return this.deque[this.deque.length - 1];
  }
}