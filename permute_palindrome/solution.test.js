import { permuteAPalindrome } from "./solution";

const func = permuteAPalindrome;
const tests = [
  {
    name: "test 1",
    params: {
      input: "a",
    },
    result: true,
  },
  {
    name: "test 2",
    params: {
      input: "aa",
    },
    result: true,
  },
  {
    name: "test 3",
    params: {
      input: "baa",
    },
    result: true,
  },
  {
    name: "test 4",
    params: {
      input: "aab",
    },
    result: true,
  },
  {
    name: "test 5",
    params: {
      input: "baabcd",
    },
    result: false,
  },
  {
    name: "test 6",
    params: {
      input: "racecars",
    },
    result: false,
  },
  {
    name: "test 7",
    params: {
      input: "abcdefghba",
    },
    result: false,
  },
  {
    name: "test 8",
    params: {
      input: "",
    },
    result: true,
  },
];

// universal tests runner
describe("kata-permute_palindrome tests", () =>
  tests.forEach((test) =>
    it(test.name, () => expect(func(test.params)).toBe(test.result))
  ));
