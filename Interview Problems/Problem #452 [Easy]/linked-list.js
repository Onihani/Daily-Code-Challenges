// LINKED LIST CLASS
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // find the size of linked list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  }

  // clear all linked nodes
  clear() {
    this.head = null;
  }

  // get first node
  getFirst() {
    return this.head;
  }

  // get last node
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  // push node at head
  pushNode(nodeReference = this.head, data = null) {
    const newNode = new ListNode();
    newNode.data = data;
    newNode.next = (nodeReference);
    nodeReference = newNode;
    return nodeReference;
  }

  // remove first node
  removeFirstNode(head = this.head) {
    if (head == null)
      return null;

    if (head.next == null) {
      let n = this.head;
      this.head = null;
      return n;
    }

    // Find the first node
    let firstNode = head;

    // Update List
    this.head = firstNode.next;

    return firstNode;
  }

  // remove last node 
  removeLastNode(head = this.head) {
    if (head == null)
      return null;

    if (head.next == null) {
      return null;
    }

    // Find the second last node
    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }

    // Change next of second last
    secondLast.next = null;

    // Update List
    this.head = head;

    return head;
  }

  // reverse list 
  reverse() {
    let newLinkedList = new LinkedList();
    if (this.head) {
      while (this.size()) { 
        const newNode = this.removeFirstNode();
        let data = newNode && newNode.data ? newNode.data : null;
        newLinkedList.head = newLinkedList.pushNode(newLinkedList.head , data)
      }
    }
    return newLinkedList
  }
}

// LIST NODE CLASS
class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

module.exports = { LinkedList, ListNode }