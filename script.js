function containValue(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) {
    console.log(`The array contains the value (${value}) at index (${index}).`);
  } else {
    console.log(`The array does not contain the value (${value}).`);
  }
}

const myArray = [10, 20, 30, 40, 50];
const valueToFind = 30;

const result = containValue(myArray, valueToFind);
console.log(result);
