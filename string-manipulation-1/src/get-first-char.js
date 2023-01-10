/* exported getFirstChar */

// check if input is NOT type of 'string'
// if true, return 'Invalid Input'
// check if input is an empty string ('')
// if true, return 'Invalid Input'
// Use bracket notation to extract and return location 0 of the input

function getFirstChar(string) {
  if (typeof string !== 'string') {
    return 'Invalid Input';
  }
  if (string === '') {
    return 'Invalid Input';
  }
  return string[0];
}
