/* exported reverse */

// check if input is NOT an array using the isArray method
// if true, return an empty array
// assign an empty array to a variable
// start a for loop, iterating a number of times equal to the length of input,
// starting from location 0
// in the loop:
// use the unshift method and bracket notation to assign an element from the input,
// at location based on the iteration, to the variable
// out of the loop
// return the variable

function reverse(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
