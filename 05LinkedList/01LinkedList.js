class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function (data) {
  const node = new Node(data, this.head);
  this.head = node;
};

LinkedList.prototype.insertAtEnd = function (data) {
  const node = new Node(data);
  if (!this.head) {
    this.head = node;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }
  last.next = node;
};

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) return console.warn("prevNode cannot be null");
  const node = new Node(data, prevNode.next);
  prevNode.next = node;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) return;
  this.head = this.head.next;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) return;
  if (!this.head.next) {
    this.head = null;
    return;
  }
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

LinkedList.prototype.deleteByKey = function (key) {
  if (!this.head) return;
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }
  let node = this.head;
  while (node.next) {
    if (node.next.data === key) {
      node.next = node.next.next;
      return;
    }
    node = node.next;
  }
  // while (node.next && node.next.data !== key) {
  //   node = node.next;
  // }
  // node.next = node.next && node.next.next;
};

LinkedList.prototype.search = function (key) {
  let node = this.head;
  while (node) {
    if (node.data === key) return node;
    node = node.next;
  }
  return false;
};

LinkedList.prototype.printList = function () {
  let values = [],
    node = this.head;
  while (node) {
    values.push(node.data);
    node = node.next;
  }
  return values;
};

LinkedList.prototype.reverseList = function () {
  let prevNode = null,
    currentNode = this.head,
    nextNode = null;
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  this.head = prevNode;
};

const list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(4);
list.insertAtEnd(5);
list.deleteByKey(2);
list.deleteLastNode();
list.insertAtBeginning(0);
list.insertAtEnd(5);
list.insertAfter(list.search(1), 2);
list.reverseList();
console.log(list.printList());
