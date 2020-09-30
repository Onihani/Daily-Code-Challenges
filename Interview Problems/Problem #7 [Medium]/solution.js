/* 
  Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded. 
  Example: the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

  formular for finding subsets of an array 2 ** n, where n is the length (number of items in set) of the set
*/

const mappingObject = {
  a: 1, b: 2, c: 3, d: 4, 
  e: 5, f: 6, g: 7, h: 8, 
  i: 9, j: 10, k: 11, l: 12,
  m: 13, n: 14, o: 15, p: 16, 
  q: 17, r: 18, s: 19, t: 20, 
  u: 21, v: 22, w: 23, x: 24,
  y: 25, z: 26
}

const mappingObjectKeys = Object.keys(mappingObject)

function possibleDecodedMessage (encodedMessage) {
  const possibleMessages = [];
  const encodedMessageArray = Array.from(encodedMessage);

  /* key: figure out a way to seperate encoded message in numbered form in all possible outcomes or rearrangements */
  function decodeMessageArr (encodedMessageArr, result = [], reverse = false) {
    encodedMessageArr.forEach((letter, index, messageArray) => {
      let derivedOutcome = []
      let tempEncodedMsg = [...encodedMessage]
  
      while (tempEncodedMsg.length) {
        let k; 
        if (reverse) {
          k = tempEncodedMsg.splice(-(index + 1), tempEncodedMsg.length).join('');
        } else {
          k = tempEncodedMsg.splice(0, index + 1).join('');
        } 

        // console.log('k: ', k)
        if (mappingObjectKeys[+k - 1]) {
          derivedOutcome.push(mappingObjectKeys[+k - 1])
        }
      }
  
      // console.log('derivedOutcome: ', derivedOutcome)
      let derivedOutcomeMsg = reverse ? derivedOutcome.reverse().join('') : derivedOutcome.join('')
      if (derivedOutcome.length && !result.includes(derivedOutcomeMsg)) {
        result.push(derivedOutcomeMsg)
      }

      return result;
    })
  }

  decodeMessageArr(encodedMessageArray, possibleMessages)
  decodeMessageArr(encodedMessageArray.reverse(), possibleMessages, true)
  console.log(possibleMessages.length, possibleMessages)

  return possibleMessages.length;
}

possibleDecodedMessage('111')