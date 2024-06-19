class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const node = new Node(data, this.head);
  if (this.head) {
    this.head.prev = node;
  } else {
    this.tail = node;
  }
  this.head = node;
};

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const node = new Node(data, null, this.tail);
  if (this.tail) {
    this.tail.next = node;
  } else {
    this.head = node;
  }
  this.tail = node;
};

DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {
  const node = new Node(data, prevNode.next, prevNode);
  if (prevNode.next) {
    prevNode.next.prev = node;
  } else {
    this.tail = node;
  }
  prevNode.next = node;
};

DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) return;
  if (this.head.next) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    this.head = null;
    this.tail = null;
  }
};

DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) return;
  if (this.tail.prev) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    this.head = null;
    this.tail = null;
  }
};

// DoublyLinkedList.prototype.reverse = function () {
//   let currNode = this.head,
//     prevNode = null,
//     nextNode = null;
//   if (!currNode || this.head === this.tail) return;
//   this.tail = currNode;
//   while (currNode) {
//     nextNode = currNode.next;
//     currNode.next = prevNode;
//     currNode.prev = nextNode;
//     prevNode = currNode;
//     currNode = nextNode;
//   }
//   this.head = prevNode;
// };

DoublyLinkedList.prototype.reverse = function () {
  let currNode = this.head,
    temp = null;
  while (currNode) {
    temp = currNode.prev;
    currNode.prev = currNode.next;
    currNode.next = temp;
    currNode = currNode.prev;
  }
  if (temp) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};

DoublyLinkedList.prototype.search = function (key) {
  let node = this.head;
  while (node) {
    if (node.data === key) return node;
    node = node.next;
  }
  return false;
};

DoublyLinkedList.prototype.printList = function () {
  const list = [];
  let node = this.head;
  while (node) {
    list.push(node.data);
    node = node.next;
  }
  return list;
};

const dll = new DoublyLinkedList();
dll.insertAtBeginning(3);
dll.insertAtBeginning(2);
dll.insertAtBeginning(1);
dll.insertAtEnd(4);
dll.insertAtEnd(5);
dll.insertAfter(dll.search(1), 1);
dll.insertAfter(dll.search(5), 6);
dll.deleteFirstNode();
dll.reverse();
console.log(dll.printList());
