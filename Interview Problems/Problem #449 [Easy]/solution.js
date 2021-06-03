function solution (number) {
  // If number is even and greater than 2
  if (!isEven(number) ) {
    return [];
  }

  const result = [];

  // find all possible prime numbers till number
  const possiblePrimeNumbers = getPrimeNumbersTill(number);

  // loop through possible prime numbers if and two sum up to number
  possiblePrimeNumbers.forEach((n, nIndex, possibleNumbersArr) => {
    if (possibleNumbersArr.includes(number - n)) {
      if (!result.some(pair => pair.includes(n))) {
        result.push([n, (number - n)])
      }
    }
  })

  return result;
}

// function to check if a number 
function isEven (n) {
  return n % 2 == 0 ? true : false;
}

// function to check is a prime number
function isPrime (n) {
  // check if number is 0 or 1 or less
  if (n < 2) return false;

  // get all Numbers till N excluding 0 and 1
  let allNumbersTillN = [...Array(n).keys()].slice(2);

  // get all factors of N
  let allFactorsOfN = allNumbersTillN.filter(i => !(n % i));

  // if factors are more than 0 factors N is not a prime number
  return allFactorsOfN.length ? false : true;
}

function getPrimeNumbersTill(n) {
  // check if number is 0 or 1 or less
  if (n < 2) return [];

  const primeNumbers = [];

  for (let i = n - 1; i > 1; i--) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers.sort((a, b) => a - b);
}

console.log(solution(50)) // logs [ [ 3, 47 ], [ 7, 43 ], [ 13, 37 ], [ 19, 31 ] ]