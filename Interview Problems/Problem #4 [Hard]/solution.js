/* 
  find the first missing positive integer in linear time and constant space. In other words, 
  find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well. 
  EXAMPLE::
*/

const list1 = [3, 4, -1, 1]; // should give 2
const list2 = [1, 2, 0] // should give 3.


// SOLUTION Method 1 (using for loops)
function method1 (list) {
  list.sort();
  const allMissingIntegers = list.filter((item, index, array) => {
    if ((array[index+1] - item) > 1 || isNaN(array[index+1] - item)) {
      return true
    }

    return false
  })
  
  return allMissingIntegers.filter(item => Math.sign(item + 1) > 0)[0] + 1
}

console.log('Method1 answer for list1: ', method1(list1))
console.log('Method1 answer for list2: ', method1(list2))