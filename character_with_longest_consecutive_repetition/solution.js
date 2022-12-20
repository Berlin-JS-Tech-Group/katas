export function longestRepetition({ input: s }) {
  const len = s.length;
  let i = 0,
    max_char = "",
    max_len = 0;

  while (i < len) {
    // checking if neighbours are equal
    let curr_max_len = 1;
    while (i + 1 < len && s[i] === s[i + 1]) {
      curr_max_len += 1;
      i += 1;
    }

    // finding new maximum values
    if (max_len < curr_max_len) {
      max_len = curr_max_len;
      max_char = s[i];
    }
    i += 1;
  }

  return [max_char, max_len];
}
