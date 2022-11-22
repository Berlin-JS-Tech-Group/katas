import { firstNonRepeatingLetter } from "./solution";

const func = firstNonRepeatingLetter;
const tests = [
  {
    name: "test 1",
    params: {
      input: "a",
    },
    result: 'a',
  },
  {
    name: "test 2",
    params: {
      input: "stress",
    },
    result: 't',
  },
  {
    name: "test 3",
    params: {
      input: "moonmen",
    },
    result: 'e',
  },
];

// universal tests runner
describe("kata-first_non_repeating_character tests", () =>
  tests.forEach((test) =>
    it(test.name, () => expect(func(test.params)).toStrictEqual(test.result))
  ));
