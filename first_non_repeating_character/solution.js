export function firstNonRepeatingLetter({ input }) {
  const sLow = input.toLowerCase();

  let charsCount = {};
  for (const char of sLow) {
    charsCount[char] = charsCount[char] ? charsCount[char] + 1 : 1;
  }

  for (const char in charsCount) {
    if (charsCount[char] === 1) {
      for (const sChar of input) {
        if (sChar === char || sChar === char.toUpperCase()) {
          return sChar;
        }
      }
    }
  }

  return "";
}

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
function findEvenIndex(arr)
{
  const arrSum = (_arr) => _arr.reduce(
    (sum, currentValue) => sum + currentValue,
    0
  );

  for (const [index, it] of arr.entries()) {
    const arrL = arr.slice(0, index);
    const arrR = arr.slice(index + 1);
    
    if (arrSum(arrL) === arrSum(arrR)) {
      return index;
    }
  }
  
  return -1;
}