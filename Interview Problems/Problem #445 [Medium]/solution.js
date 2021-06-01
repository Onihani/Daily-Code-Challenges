const { TreeNode, BinaryTree } = require("./binary-tree.js")
const demoTree = new BinaryTree();

// adding root node zero (0)
demoTree.insert(0)

// building binary tree from problem example
/* 
   0
  / \
  1  0
    / \
   1   0
  / \
  0  0
*/

demoTree.root.left = new TreeNode(1)
demoTree.root.right = new TreeNode(0)
demoTree.root.right.right = new TreeNode(0)
demoTree.root.right.left = new TreeNode(1)
demoTree.root.right.left.right = new TreeNode(0)
demoTree.root.right.left.left = new TreeNode(0)

console.log(demoTree)

function prunTree(node, logType = "main") {
  if (!node) return null;

  console.log(logType, node);

  node.left = prunTree(node.left, "left");
  node.right = prunTree(node.right, "right");

  if (!node.left && !node.right && !node.key) {
    return null;
  }

  return node;
}

const prunedTree = prunTree(demoTree.root);
console.log("prunedTree", prunedTree);
// logs pruned node below
/* 
   0
  / \
  1  0
    / 
   1   
*/

// console.log("prunedTree.left", prunedTree.left);
// console.log("prunedTree.right", prunedTree.right);