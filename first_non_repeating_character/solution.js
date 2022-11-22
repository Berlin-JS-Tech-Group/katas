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
