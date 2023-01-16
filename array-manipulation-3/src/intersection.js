/* exported intersection */

// declare a function named intersection with 2 arguments; first and second
//   check if first OR second is NOT an array
//     if true:
//       return an empty array
//   check if the length of first is greater than or equal to second
//     if true:
//       call assignElements with first as the first argument and second as the
//       second argument and assign the return to a variable named newArray
//     otherwise:
//       call assignElements with second as the first argument and first as the
//       second argument and assign the return to a variable named newArray
//   return newArray
//
// declare a function named assignElements with 2 arguments; first and second
//   declare a variable and assign it an empty array
//   begin a loop iterating an amount of times equal to the length of first
//     for each index in first:
//       check if the current element is in second
//         if true:
//           append the current element to the empty array variable
//   return the empty array variable

function intersection(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second)) {
    return [];
  }
  if (first.length >= second.length) {
    var newArray = assignElements(first, second);
  } else {
    newArray = assignElements(second, first);
  }
  return newArray;
}

function assignElements(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
