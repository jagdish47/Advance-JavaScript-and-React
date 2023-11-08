function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const sum = customReduce(
  numbers,
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  0
);

console.log(sum);
