class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  // 向栈中添加元素
  push(el) {
    this.stack.push(el);
    this.length++;
    return this.stack;
  }

  // 弹出栈顶元素
  pop() {
    let item = this.stack.pop();
    if (this.stack.length > 0) {
      this.length--;
    }
    return item;
  }

  // 返回栈顶元素
  peek() {
    return this.stack[this.length - 1];
  }

  // 栈是否为空
  isEmpty() {
    return this.length === 0;
  }

  // 清空栈
  clear() {
    this.stack = [];
    this.length = 0;
  }

  // 栈大小
  size() {
    return this.length;
  }
}

let stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));

console.log(stack.peek());

console.log(stack.pop());


console.log(stack.isEmpty());

console.log(stack.size());

console.log(stack.clear());

console.log(stack.size());


