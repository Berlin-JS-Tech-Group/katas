export function findEvenIndex({ input }) {
  const arr = input;

  const arrSum = (_arr) =>
    _arr.reduce((sum, currentValue) => sum + currentValue, 0);

  for (const [index, it] of arr.entries()) {
    const arrL = arr.slice(0, index);
    const arrR = arr.slice(index + 1);

    if (arrSum(arrL) === arrSum(arrR)) {
      return index;
    }
  }

  return -1;
}
