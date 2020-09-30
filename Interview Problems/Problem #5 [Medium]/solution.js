/* 
  cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
  For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
  Task is for create functions cons, car and cdr when the functionalies above
*/

// function for construction pair Cons
function cons (a, b) {
  return function pair (f) {
    return f(a, b)
  }
}


// function for returning first pair Car
function car (func) {
  return func(function cb (x, y) {
    return x;
  })
}


// function for returning second pair Cdr
function cdr (func) {
  return func(function cb (x, y) {
    return y;
  })
}

console.log(car(cons(3, 4))) // 3
console.log(cdr(cons(3, 4))) // 4