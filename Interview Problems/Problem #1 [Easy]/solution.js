const list = [10, 15, 3, 7]; // (the list)
const k = 17 // (k)


// Solution Method 1 (using for loops)
function method1 () {
  for (let x = 0; x < list.length - 1; x++) {
    for (let y = x + 1; y < list.length; y++) {
      if (list[x] + list[y] == k) {
        return true;
      }
    }
  }
  return false;
}

console.log('Answer For Method 1: ' + method1())


// Solution Method 2 (using loops 2)
// We can use the inverse/reversal of this method also `for of` before `forEach`
function method2 () { 
  let result = false;
  list.forEach((item, index, array) => {
    for (let otherItem of array.slice(index + 1)) {
      result = (item + otherItem == k) ? true : result;
    }
  })
  return result;
}

console.log('Answer For Method 2: ' + method2())


// Solution Method 3 (using Array.filter and Array.reduce with all possible list pairs)
function method3 () {
  const allPossibleArrayPairs = [] // array for collecting all possible list pairs
  
  for (let item of list) {
    const listWithoutCurrentItem = list.slice(list.indexOf(item) + 1);
    listWithoutCurrentItem.forEach((figure, index) => {
      if (index == list.length - 1) return;
      allPossibleArrayPairs.push(new Array(item, figure)) 
    })
  }

  const matchedArrayPairs = allPossibleArrayPairs.filter(answer => answer.reduce((accum, current) => (accum + current), 0) == k); // filtering all possible pairs for pairs that add up to k
  return matchedArrayPairs.length ? true : false;
}

console.log('Answer For Method 3: ' + method3())
