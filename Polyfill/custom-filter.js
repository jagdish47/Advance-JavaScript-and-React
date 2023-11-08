function customFilter(arr, callback) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

const filteredArray = customFilter(numbers, (number) => {
  return number % 2 === 0;
});

console.log(filteredArray);
