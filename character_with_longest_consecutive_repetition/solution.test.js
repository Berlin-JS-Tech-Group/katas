import { longestRepetition } from "./solution";

const func = longestRepetition;
const tests = [
  {
    name: "test 1",
    params: {
      input: "aaaabb",
    },
    result: ["a", 4],
  },
  {
    name: "test 2",
    params: {
      input: "bbbaaabaaaa",
    },
    result: ["a", 4],
  },
  {
    name: "test 3",
    params: {
      input: "cbdeuuu900",
    },
    result: ["u", 3],
  },
  {
    name: "test 4",
    params: {
      input: "abbbbb",
    },
    result: ["b", 5],
  },
  {
    name: "test 5",
    params: {
      input: "aabb",
    },
    result: ["a", 2],
  },
  {
    name: "test 6",
    params: {
      input: "",
    },
    result: ["", 0],
  },
  {
    name: "test 7",
    params: {
      input: "ba",
    },
    result: ["b", 1],
  },
];

// universal tests runner
describe("kata-character_with_longest_consecutive_repetition tests", () =>
  tests.forEach((test) =>
    it(test.name, () => expect(func(test.params)).toStrictEqual(test.result))
  ));
