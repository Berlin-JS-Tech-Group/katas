export function permuteAPalindrome({ input }) {
  // --  counting each char's total #
  let charsCount = {};
  for (const char of input) {
    charsCount[char] = charsCount[char] ? charsCount[char] + 1 : 1;
  }

  // -- counting number of odd numbers
  //    bc we can have 1 odd number
  let numberOfOdds = 0;
  for (const char in charsCount) {
    const count = charsCount[char];

    if (count % 2 === 1) {
      numberOfOdds++;
    }
  }

  return numberOfOdds <= 1;
}
