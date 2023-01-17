/* exported difference */

// declare a function named difference with 2 arguments; first and second
//   declare a variable named newArray and assign it an empty array
//   check if first OR second is NOT an array
//     if true:
//       return an empty array
//   begin a loop iterating an amount of times equal to the length of first
//     for each index in first:
//       check if the current element is NOT in second
//         if true:
//           append the current element to newArray
//   begin a loop iterating an amount of times equal to the length of second
//     for each index in second:
//       check if the current element is NOT in first
//         if true:
//           append the current element to newArray
//   return newArray

function difference(first, second) {
  var newArray = [];
  if (!Array.isArray(first) || !Array.isArray(second)) {
    return [];
  }
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
