/* exported unique */

// declare a function named unique with 1 argument; array
//   declare a variable named newArray and assign it an empty array
//   check if array is NOT an array
//     if true:
//       return an empty array
//   begin a loop iterating an amount of times equal to the length of array
//     for each index:
//       check if the current element of array is NOT in newArray
//         if true:
//           append the current element into newArray
//   return newArray

function unique(array) {
  var newArray = [];
  if (!Array.isArray(array)) {
    return newArray;
  }
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
