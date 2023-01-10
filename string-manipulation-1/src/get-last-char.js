/* exported getLastChar */

// check if input is NOT type of 'string'
// if true, return 'Invalid Input'
// check if input is an empty string ('')
// if true, return 'Invalid Input'
// Use bracket notation to extract and return location input.length -1 of the input

function getLastChar(string) {
  if (typeof string !== 'string') {
    return 'Invalid Input';
  }
  if (string === '') {
    return 'Invalid Input';
  }
  return string[string.length - 1];
}
