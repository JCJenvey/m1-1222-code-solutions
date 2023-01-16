/* exported union */

// declare a function named union with 2 arguments; first and second
//   declare a variable named newArray and assign it an empty array
//   check if first OR second is NOT an array
//     if true:
//       return an empty array
//   begin a loop iterating an amount of times equal to the length of first
//     for each index:
//       check if the current element of first is NOT in newArray
//         if true:
//           append the current element into newArray
//   begin a loop iterating an amount of times equal to the length of second
//     for each index:
//       check if the current element of second is NOT in newArray
//         if true:
//           append the current element into newArray
//   return newArray

function union(first, second) {
  var newArray = [];
  if (!Array.isArray(first) || !Array.isArray(second)) {
    return newArray;
  }
  for (var i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (!newArray.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
