class Queue {
  constructor() {
    this.queue = [];
  }

  // 向队列尾部添加元素
  enqueue (el) {
    this.queue.push(el);
    return this.queue;
  }

  // 移除队列的第一项
  dequeue () {
    return this.queue.shift();
  }

  // 返回队列的第一个元素
  peek () {
    return this.queue[0];
  }

  // 判断队列是否为空
  isEmpty () {
    return this.queue.length === 0;
  }

  // 返回队列的大小
  size () {
    return this.queue.length;
  }
}