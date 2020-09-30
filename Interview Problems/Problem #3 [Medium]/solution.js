class Node {
  constructor (val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

node = new Node('root', new Node('left', new Node('left.left')), new Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left' // in python

console.log(node)

// SOLUTION 
// creating serialize to convert binary tree to string
function serialize(root) {
  return JSON.stringify(root)
}

// creating deserialize to convert string to binary tree
function deserialize(s) {
  return JSON.parse(s)
}


console.log(deserialize(serialize(node)).left.left.val) // returns left.left