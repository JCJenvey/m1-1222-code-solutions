/* exported chunk */

// declare a function named chunk with 2 arguments; array and size
//   check if array is NOT an array OR size is NOT a number or size is less than 0
//     if true:
//       return an empty array
//   declare a variable named nestedArray and assign it an empty array
//   begin a loop with the iteration variable incrementing based on size and
//   otherwise iterating based on the length of array
//     for each index in array:
//       declare a variable and assign it an empty array
//       check if the iteration plus size is greater than the length of array
//         if true:
//           begin a loop iterating an amount of times equal to the iteration of
//           the parent loop minus the length of array
//             for each index in array:
//               append the element in array to the variable
//         otherwise:
//           begin a loop iterating an amount of times equal to size
//             for each index in array:
//               append the element in array to the variable
//       append the variable to nestedArray
//   return nestedArray

function chunk(array, size) {
  if (!Array.isArray(array) || typeof size !== 'number' || size < 0) {
    return [];
  }
  var nestedArray = [];
  for (var i = 0; i < array.length; i += size) {
    var tempArray = [];
    if ((i + size) > array.length) {
      for (var j = i; j < array.length; j++) {
        tempArray.push(array[j]);
      }
    } else {
      for (var k = i; k < size + i; k++) {
        tempArray.push(array[k]);
      }
    }
    nestedArray.push(tempArray);
  }
  return nestedArray;
}
