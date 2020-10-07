const { TreeNode, BinaryTree } = require("./binary-tree.js")
const demoTree = new BinaryTree();

// adding root node zero (0)
demoTree.insert(0);

// building binary tree from problem example
/* 
   0
  / \
  1  0
    / \
   1   0
  / \
  1  1
*/

demoTree.root.left = new TreeNode(1)
demoTree.root.right = new TreeNode(0)
demoTree.root.right.right = new TreeNode(0)
demoTree.root.right.left = new TreeNode(1)
demoTree.root.right.left.right = new TreeNode(1)
demoTree.root.right.left.left = new TreeNode(1)

// console.log(demoTree.root)


function isUnival (node) {
  return univalHelper(node, node.key) 
}


function univalHelper (node, key) {
  if (node === null) return true;

  if (node.key === key) {
    return univalHelper(node.left, key) && univalHelper(node.right, key);
  }

  return false;
}

function countUnivalSubTrees(node) {
  if (node === null) return 0;

  const leftCount = countUnivalSubTrees(node.left)
  const rightCount = countUnivalSubTrees(node.right)

  return isUnival (node) ? 1 + leftCount + rightCount : leftCount + rightCount;
}

console.log(isUnival(demoTree.root.right.left))
console.log(demoTree.root.right.left.key);
console.log(countUnivalSubTrees(demoTree.root))