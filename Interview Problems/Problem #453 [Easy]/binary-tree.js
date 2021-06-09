// How to create a binary tree data-structure in JS

// creatting a tree node class to be used by binary tree
class TreeNode {
  constructor(key, data) {
    this.key = key;
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /* function to be implemented  */
  insert(key, value) {
    // if (typeof data === 'undefined') {
    //   throw new Error('Data cannot be undefined');
    // }

    const newTreeNode = new TreeNode(key, value);

    if (this.root === null) {
      this.root = newTreeNode;
    } else {
      this.insertNode(this.root, newTreeNode)
    }
  }

  insertNode(node, newNode) {
    if (node.key < newNode.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  remove(key) {
    // root is re-initialized with 
    // root of a modified tree. 

    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) {
      return null
    }

    if (key < node.key) {
      node.left = this.removeNode(node.left, key).p;
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    if (key === node.key) {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null
        return node;
      }

      // deleting node with one children 
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children 
      // minumum node of the right subtree 
      // is stored in aux 
      const aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.key);

      return node;
    }

  }

  /* === Helper functions === */

  //  finds the minimum node in tree 
  // searching starts from given node 
  findMinNode(node) {
    // if left of a node is null 
    // then it must be minimum node 
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  // returns root of the tree 
  getRootNode() {
    return this.root;
  }

  traverse(node = this.root, callback) {
    if (node !== null) {
      if (callback) callback(node);
      console.log(node.key);
      this.traverse(node.left, callback);
      this.traverse(node.right, callback);
    }
  }

  /* Performs inorder traversal of a tree */
  // 1. Traverse the left subtree i.e perform inorder on left subtree
  // 2. Visit the root
  // 3. Traverse the right subtree i.e perform inorder on right subtree
  inorder(node = this.root, callback) {
    if (node !== null) {
      if (callback) callback(node);
      console.log(node.key);
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }

  /* Performs preorder traversal of a tree */
  // 1. Visit the root
  // 2. Traverse the left subtree i.e perform preorder on left subtree
  // 3. Traverse the right subtree i.e perform preorder on right subtree 
  preorder(node = this.root, callback) {
    if (node !== null) {
      if (callback) callback(node);
      console.log(node.key);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  /* Performs postorder traversal of a tree */
  // 1. Traverse the left subtree i.e perform postorder on left subtree
  // 2. Traverse the right subtree i.e perform postorder on right subtree
  // 3. Visit the root
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.key);
      console.log(node.data);
    }
  }

  // search for a node with given key 
  search(node, key) {
    // if trees is empty return null 
    if (node === null)
      return null;

    // if key is less than node's key 
    // move left 
    else if (key < node.key)
      return this.search(node.left, key);

    // if key is less than node's key 
    // move left 
    else if (key > node.key)
      return this.search(node.right, key);

    // if key is equal to the node key  
    // return node 
    else
      return node;
  }

}



// const exampleTree = new BinaryTree();
// exampleTree.insert(0)
// exampleTree.insert(0)
// exampleTree.insert(1)
// exampleTree.insert(0)
// exampleTree.insert(1)
// exampleTree.insert(1)
// exampleTree.insert(1)

// const root = exampleTree.getRootNode()
// console.log(root)

exports.TreeNode = TreeNode;
exports.BinaryTree = BinaryTree;