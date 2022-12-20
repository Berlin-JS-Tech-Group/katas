import { order } from "./solution";

const func = order;
const tests = [
  {
    name: "test 1",
    params: {
      input: "is2 Thi1s T4est 3a",
    },
    result: "Thi1s is2 3a T4est",
  },
  {
    name: "test 2",
    params: {
      input: "4of Fo1r pe6ople g3ood th5e the2",
    },
    result: "Fo1r the2 g3ood 4of th5e pe6ople",
  },
  {
    name: "test 3",
    params: {
      input: "",
    },
    result: "",
  },
];

// universal tests runner
describe("kata-your_order_please tests", () =>
  tests.forEach((test) =>
    it(test.name, () => expect(func(test.params)).toStrictEqual(test.result))
  ));
