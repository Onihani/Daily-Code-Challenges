/* Given a 32-bit positive integer N, determine whether it is a power of four in faster than O(log N) time. */

/* Function to check if x is power of 4*/
function isPowerOfFour(n) {
  let x = 0;
  let y = n;

  if (n == 0) {
    return false;
  }

  while (n != 1) {
    if (n % 4 != 0)
      return false;
    x += 1;
    n = n / 4;
  }

  console.log(y , `is 4 to the power ${x}`)
  return true;
}

/*Driver program to test above function*/
let test_no = 64;
if (isPowerOfFour(test_no))
  console.log(test_no + " is a power of 4");
else
  console.log(test_no + " is not a power of 4");

// References Aided in solution
// @gauravrajput1 solution on geeksforgeeks.com
// link: https://www.geeksforgeeks.org/find-whether-a-given-number-is-a-power-of-4-or-not/