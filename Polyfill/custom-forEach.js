function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

customForEach(numbers, (element, index, array) => {
  console.log(`Element ${element} at index ${index} in array [${array}]`);
});
