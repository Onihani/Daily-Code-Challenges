function searchForPattern (string, pattern) {
  // there is an in built js function for this already (string.prototype.search())
  const result = string.search(pattern);
  return result > -1 ? result : false;
}

let sampleStr = "The quick browm fox jumps over the lazy dog. If the dog barked, was it really lazy?";
// any character that is not a word character or whitespace
let samplePattern = /[^\w\s]/g;

let result = searchForPattern (sampleStr, samplePattern);
console.log(result);