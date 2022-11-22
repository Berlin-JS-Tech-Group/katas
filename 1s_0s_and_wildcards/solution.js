export function possibilities({ input }) {
  const pureStrs = [];

  function changeQuestionMark(s) {
    if (!s.includes("?")) {
      pureStrs.push(s);
      return;
    }

    changeQuestionMark(s.replace("?", "0"));
    changeQuestionMark(s.replace("?", "1"));
  }

  changeQuestionMark(input);

  return pureStrs.sort();
}
