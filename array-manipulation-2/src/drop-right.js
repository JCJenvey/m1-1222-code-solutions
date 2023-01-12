/* exported dropRight */

// declare a function named dropRight with 2 arguments; array and count
//   check if array is NOT an array OR count is NOT a number or count is less than 0
//     if true:
//       return an empty array
//   check if count is larger than the length of array
//     if true:
//       set count equal to the length of array
//   declare a variable and assign it an empty array
//   begin a loop that iterates an amount of times equal to the length of array minus count
//     for each index in array:
//       append that element to the new array
//   return the variable

function dropRight(array, count) {
  if (!Array.isArray(array) || typeof count !== 'number' || count < 0) {
    return [];
  }
  if (count > array.length) {
    count = array.length;
  }
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
