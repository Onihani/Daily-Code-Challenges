const { LinkedList, ListNode } = require("./linked-list.js");

const demoNode1 = new ListNode(9, new ListNode(9));
const demoList1 = new LinkedList(demoNode1);

const demoNode2 = new ListNode(5, new ListNode(2));
const demoList2 = new LinkedList(demoNode2);

function solution (firstList, secondList) {
  // check if lists have a size of 2
  if (!(firstList.size() == secondList.size()) && !(secondList.size() == 2)) {
    throw new Error("Both lists should have a size of 2");
  }

  // reverse nodes 
  const reversedFirstList = firstList.reverse();
  const reversedSecondList = secondList.reverse();

  // get the first and second data for each linkedList
  const a = Number(`${reversedFirstList.getFirst().data}${reversedFirstList.getLast().data}`);
  const b = Number(`${reversedSecondList.getFirst().data}${reversedSecondList.getLast().data}`);

  return a + b;
}

console.log(solution(demoList1, demoList2)); // logs 124