/* exported tail */

// check if input is NOT an array OR has only 1 element
// if true, return an empty array
// assign an empty array to a variable
// start a for loop, iterating a number of times equal to the length of input
// minus 1, starting from location 1
// in the loop:
// use the push method and bracket notation to assign an element from the input,
// at location based on the iteration, to the variable
// out of the loop
// return the variable

function tail(array) {
  if (!Array.isArray(array) || array.length === 1) {
    return [];
  }
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
