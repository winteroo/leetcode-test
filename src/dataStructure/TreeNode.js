class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function arrayToBinaryTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const node = new TreeNode(arr[index]);
  node.left = arrayToBinaryTree(arr, 2 * index + 1);
  node.right = arrayToBinaryTree(arr, 2 * index + 2);

  return node;
}

const testRoot = arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

export { TreeNode, arrayToBinaryTree, testRoot };
