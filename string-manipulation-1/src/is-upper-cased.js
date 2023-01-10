/* exported isUpperCased */

// check if input is NOT type of 'string'
// if true, return false
// check if input is equal to itself with the toUpperCase method called
// if true, return true
// otherwise, return false

function isUpperCased(word) {
  if (typeof word !== 'string') {
    return false;
  }
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
