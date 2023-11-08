function customMap(arr, callback) {
  const mappedArray = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i]));
  }

  return mappedArray;
}

const number = [1, 2, 3, 4, 5];

const doubledNumber = customMap(number, (number) => {
  return number * 2;
});

console.log(doubledNumber);
