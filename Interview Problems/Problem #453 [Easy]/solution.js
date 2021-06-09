const { BinaryTree, TreeNode } = require("./binary-tree.js");
const demoTree = new BinaryTree();

demoTree.insert(10);

// building binary tree from problem example
//     10
//    /   \
//  5      15
//        /  \
//      11    15
// Return the nodes 5 and 15.

demoTree.root.left = new TreeNode(5);
demoTree.root.right = new TreeNode(15);
demoTree.root.right.right = new TreeNode(15);
demoTree.root.right.left = new TreeNode(11);

function solution(target, tree) {
  const nodeKeys = [];
  const result = [];

  tree.traverse(demoTree.root, function (node) {
    nodeKeys.push(node.key);
  });

  nodeKeys.forEach((key, index, arr) => {
    if (key + arr[index + 1] == target) {
      result.push([key, arr[index + 1]]);
    }
  });

  return result;
}

console.log(solution(20, demoTree)); // logs [ [5, 15] ]
