/* exported takeRight */

// declare a function named takeRight with 2 arguments; array and count
//   check if array is NOT an array OR count is NOT a number or count is less than 0
//     if true:
//       return an empty array
//   check if count is larger than the length of array
//     if true:
//       return array
//   declare a variable and assign it an empty array
//   begin a loop that iterates an amount of times equal to count
//     for each index in array:
//       append that element to the new array
//   return the variable

function takeRight(array, count) {
  if (!Array.isArray(array) || typeof count !== 'number' || count < 0) {
    return [];
  }
  if (count > array.length) {
    return array;
  }
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
