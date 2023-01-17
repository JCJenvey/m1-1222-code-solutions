/* exported flatten */

// declare a function named flatten with 1 argument; array
//   declare a variable and assign it an empty array
//   check if array is NOT an array
//     if true:
//       return an empty array
//   begin a loop itertating an amount of times equal to the length of array
//     for each index in array:
//       check if the current element is an array
//         if true:
//           begin a loop iterating an amount of times equal to the length of the
//           array in the element
//             for each index:
//               append the value onto the empty array variable
//         otherwise:
//           append the value onto the empty array variable
//   return the variable

function flatten(array) {
  var newArray = [];
  if (!Array.isArray(array)) {
    return newArray;
  }
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
