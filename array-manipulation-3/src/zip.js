/* exported zip */

// declare a function named zip with 2 arguments; first and second
//   declare a variable named newArray and assign it an empty array
//   check if first OR second is NOT an array OR first OR second is an empty array
//     if true:
//       return an empty array
//   check if first is longer than second, or equal in length
//     if true:
//       declare a variable and assign it the length of second
//     otherwise:
//       declare a variable and assign it the length of first
//   begin a loop iterating a number of times equal to the number in the variable
//     for each index:
//       declare a variable and assign it the element in the index of first and
//       the element in the index of second
//       append the new array variable to newArray
//   return newArray

function zip(first, second) {
  var newArray = [];
  if (!Array.isArray(first) || !Array.isArray(second) || first === [] || second === []) {
    return newArray;
  }
  if (first.length >= second.length) {
    var maxLoops = second.length;
  } else {
    maxLoops = first.length;
  }
  for (var i = 0; i < maxLoops; i++) {
    var tempArray = [first[i], second[i]];
    newArray.push(tempArray);
  }
  return newArray;
}
