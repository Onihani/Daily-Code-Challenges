/*

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

*/

const testCase1 = [2, 4, 6, 2, 5] // 13
const testCase2 = [5, 1, 1, 5] //10


function sumLargestNonAdjacentNumbers (arr) {
  const possibleLargestSums = [];

  arr.forEach((number, index, array) => {
   const offsetedArr = array.slice(index)
   console.log(offsetedArr)
    offsetedArr.forEach((item, position, offsetArr) => {
      if ((index+1) < offsetedArr.length) {
        // figure out a to filter the offsetArr based on range
        let filteredArrByIndex = offsetArr.filter((n, i) => {
          return (position/(i+1)) % position  == 0
        })
        console.log('filteredArrByIndex => ',position, ': ', filteredArrByIndex)
      }
    })
  })
}

sumLargestNonAdjacentNumbers(testCase1)
sumLargestNonAdjacentNumbers(testCase2)
