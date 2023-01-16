/* exported equal */

// declare a function named equal with 2 arguments; first and second
//   check if first is NOT an array OR if second is NOT an array OR if the length
//   of first and second are NOT equal
//     if true:
//       return false
//   begin a loop iterating an amount of times equal to the length of first (or second)
//     for each index:
//       check if the element in the index of first is NOT equal to the element
//       in the index of second
//         if true:
//           return false
//   return true

function equal(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second) || first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
