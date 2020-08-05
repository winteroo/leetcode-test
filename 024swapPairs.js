/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description
 * 迭代版本
 * 不断交换first和second节点
 * 注意交换的逻辑
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  // 创建哑结点
  const ans = new ListNode(-1);
  ans.next = head;
  let temp = ans;
  while (temp.next && temp.next.next) {
    const first = temp.next;
    const second = temp.next.next;
    // 哑结点 -> second
    // second -> first
    // first -> second.next
    [temp.next, second.next, first.next] = [second, first, second.next];
    temp = temp.next.next;
  }
  return ans.next;
};

/**
 * @description
 * 递归版本:如果交换逻辑正确，递归函数会输出你希望的执行结果
 * 按照正常的思路
 * 先将first -> 递归(second.next === head)
 * 再将second -> first
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairsElse = function (head) {
  if (!head || !head.next) return head;
  const first = head;
  const second = head.next;
  first.next = swapPairsElse(second.next);
  second.next = first;
  return second;
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

const list = [1, 2, 3, 4];
const linkedList = new LinkedList();
let i = 0;
while (i < list.length) {
  linkedList.push(list[i]);
  i++;
}

console.log(linkedList);

console.log(swapPairs(linkedList.head));

console.log(swapPairsElse(linkedList.head));
