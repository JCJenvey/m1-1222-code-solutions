/* exported head */

// check if input is NOT an array using the isArray method
// if true, return 'Invalid Input'
// use bracket notation to extract and return the element of the input at location 0

function head(array) {
  if (!Array.isArray(array)) {
    return 'Invalid Input';
  }

  return array[0];
}
