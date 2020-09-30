/* 
  For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
*/

const strings = ['dog', 'deer', 'deal'];

function findPossibleQueryStrings (query) {
  return strings.filter(string => string.startsWith(query));
}

console.log(findPossibleQueryStrings('de'))