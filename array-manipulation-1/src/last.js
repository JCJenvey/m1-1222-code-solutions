/* exported last */

// check if input is NOT an array using the isArray method
// if true, return 'Invalid Input'
// use bracket notation to extract and return an element from the input at
// location equal to the length of the input minus 1

function last(array) {
  if (!Array.isArray(array)) {
    return 'Invalid Input';
  }

  return array[array.length - 1];
}
