/* exported getWords */

// check if input is NOT type of 'string'
// if true, return an empty array
// check if input is an empty string ('')
// if true, return an empty array
// call the split method on the input splitting from whitespace and returning the result

function getWords(string) {
  if (typeof string !== 'string') {
    return [];
  }
  if (string === '') {
    return [];
  }
  return string.split(' ');
}
