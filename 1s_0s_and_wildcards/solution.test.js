import { possibilities } from "./solution";

const func = possibilities;
const tests = [
  {
    name: "test 1",
    params: {
      input: "101?",
    },
    result: ["1010", "1011"].sort(),
  },
  {
    name: "test 2",
    params: {
      input: "1?1?",
    },
    result: ["1010", "1110", "1011", "1111"].sort(),
  },
];

// universal tests runner
describe("kata-1s_0s_and_wildcards tests", () =>
  tests.forEach((test) =>
    it(test.name, () => expect(func(test.params)).toStrictEqual(test.result))
  ));
