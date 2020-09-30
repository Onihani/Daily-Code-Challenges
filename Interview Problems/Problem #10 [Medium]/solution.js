/* 
  Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

function jobScheduler (f, n) {
  return setTimeout(f, n);
}

const congrats = () => {
  console.log('congratulations you got the job')
}

jobScheduler(congrats, 1000)