const {
  depthFirstTraversal,
  recursiveDepthFirstTraversal,
} = require("./02DFT");
const { breadthFirstTraversal } = require("./03BFT");
const { treeSumWithDFT, treeSumWithBFT } = require("../Problems/treeSum/treeSum");

class BSTNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root) this.insertNodeAt(this.root, newNode);
    else this.root = newNode;
  }

  insertNodeAt(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left) this.insertNodeAt(node.left, newNode);
      else node.left = newNode;
    } else {
      if (node.right) this.insertNodeAt(node.right, newNode);
      else node.right = newNode;
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (!node) return null;
    if (key < node.key) node.left = this.deleteNode(node.left, key);
    else if (key > node.key) node.right = this.deleteNode(node.right, key);
    else {
      if (!node.left && !node.right) return null;
      else if (!node.left) return node.right;
      else if (!node.right) return node.left;
      else {
        const tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }

  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  inorderTraversal() {
    const result = [];
    this.inorder(this.root, result);
    return result;
  }

  inorder(node, result) {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.key);
      this.inorder(node.right, result);
    }
  }

  preOrderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    return result;
  }

  preOrder(node, result) {
    if (node) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  recursivePreOrderTraversal() {
    function recurse(node) {
      if (!node) return [];
      return [node.key, ...recurse(node.left), ...recurse(node.right)];
    }
    return recurse(this.root);
  }

  postOrderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    return result;
  }

  postOrder(node, result) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.key);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(6);
bst.insert(3);
bst.insert(1);
bst.insert(7);
// bst.delete(2);
console.log("inorderTraversal", bst.inorderTraversal());
console.log("preOrderTraversal", bst.preOrderTraversal());
console.log("recursivePreOrderTraversal", bst.recursivePreOrderTraversal());
console.log("postOrderTraversal", bst.postOrderTraversal());
console.log("depthFirstTraversal", depthFirstTraversal(bst.root));
console.log(
  "recursiveDepthFirstTraversal",
  recursiveDepthFirstTraversal(bst.root)
);
console.log("breadthFirstTraversal", breadthFirstTraversal(bst.root));
console.log("treeSumWithDFT", treeSumWithDFT(bst.root));
console.log("treeSumWithBFT", treeSumWithBFT(bst.root));
