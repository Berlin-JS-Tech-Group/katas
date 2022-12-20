export function order({ input: words }) {
  // looking for a number in the string
  const dict = {};
  for (const w of words.split(" ")) {
    for (const c of w) {
      if (!!Number(c)) {
        dict[Number(c)] = w;
      }
    }
  }

  // pushing strings in a correct order
  const strs = [];
  for (const ndx of Object.keys(dict).sort()) {
    strs.push(dict[ndx]);
  }
  return strs.join(" ");
}
