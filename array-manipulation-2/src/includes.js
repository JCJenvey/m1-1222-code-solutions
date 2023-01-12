/* exported includes */

// declare a functiom named includes with 2 arguments; array and value
//   check if array is NOT an array
//     if true:
//       return false
//   begin a loop iterating an amount of times equal to the length of array
//     for each index in array:
//       check if the element is equal to value
//         if true:
//           return true
//   return false

function includes(array, value) {
  if (!Array.isArray(array)) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
