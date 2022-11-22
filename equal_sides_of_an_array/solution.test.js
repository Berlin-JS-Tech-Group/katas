import { findEvenIndex } from "./solution";

const func = findEvenIndex;
const tests = [
  {
    name: "test 1",
    params: {
      input: [1, 2, 3, 4, 3, 2, 1],
    },
    result: 3,
  },
  {
    name: "test 2",
    params: {
      input: [1, 100, 50, -51, 1, 1],
    },
    result: 1,
  },
  {
    name: "test 3",
    params: {
      input: [1, 2, 3, 4, 5, 6],
    },
    result: -1,
  },
  {
    name: "test 4",
    params: {
      input: [20, 10, 30, 10, 10, 15, 35],
    },
    result: 3,
  },
];

// universal tests runner
describe("kata-equal_sides_of_an_array tests", () =>
  tests.forEach((test) =>
    it(test.name, () => expect(func(test.params)).toStrictEqual(test.result))
  ));
