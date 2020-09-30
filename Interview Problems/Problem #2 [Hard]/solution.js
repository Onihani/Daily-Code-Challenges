/* 
  task is to return a new array such that each element at index i of the new array 
  is the product of all the numbers in the original array except the one at i. 
  ====> Examples :
*/

const list1 = [1, 2, 3, 4, 5] // the expected output would be [120, 60, 40, 30, 24].
const list2 = [3, 2, 1] // the expected output would be [2, 3, 6].


// SOLUTION Method 1 (using array.map, array.filter, array.reduce)
function method1 (list) { 
  return list.map((item, index, array) => {
    const arrayWithOutCurrentItem = array.filter((figure, figureIndex) => index !== figureIndex)
    return arrayWithOutCurrentItem.reduce((accum, current) => accum *= current, 1)
  })
}

console.log('Method1 Answer for List 1: ', method1(list1))
console.log('Method1 Answer for List 2: ', method1(list2))


// SOLUTION Method 2 (using for loops)
function method2 (list) { 
  const finalList = []
  for (item of list) {
    const tempList = [...list]
    tempList.splice(list.indexOf(item), 1) // removing current item of tempList
    tempFinalItem = 1;
    tempList.forEach(figure => tempFinalItem *= figure) 
    finalList.push(tempFinalItem)
  }
  return finalList;
}

console.log('Method2 Answer for List 1: ', method2(list1))
console.log('Method2 Answer for List 2: ', method2(list2))