/* XOR linked list class  */
class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  static createListNode(data, prev, next, callback) {
    const newNode = new ListNode(data, prev, next);
    if (callback) {
      callback(newNode);
    }
    return newNode;
  }

  // adds a new node to then of the list
  add(element) {
    const newNode = DoublyLinkedList.createListNode(element);
    const lastNode = this.getLast();
    if (lastNode == null) {
      this.head = newNode
    } else {
      lastNode.both.next = newNode;
    }
    newNode.both.prev = lastNode;
    return newNode;
  }

  // eturns the node at index
  get(index) {
    if (index > this.size() - 1) return null;

    let foundNode = this.head;
    for (let i = 0; i < index; i++) {
      foundNode = foundNode.both.next;
    }

    return foundNode;
  }

  // get last node
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.both.next) {
        lastNode = lastNode.both.next;
      }
    }
    return lastNode;
  }

  // find the size of linked list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.both.next;
    }
    return count;
  }

  // push node at head
  pushNode(nodeReference = this.head, data = null) {
    const newNode = new ListNode();
    newNode.data = data;
    newNode.both.next = nodeReference;
    nodeReference = newNode;
    return nodeReference;
  }
}

/* XOR linked list node */
class ListNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.both = { prev, next };
  }
}

const demoList = new DoublyLinkedList();
demoList.add(5)
demoList.add(10)
// demoList.head.both.next.both.prev = demoList.head;

console.log(demoList);

