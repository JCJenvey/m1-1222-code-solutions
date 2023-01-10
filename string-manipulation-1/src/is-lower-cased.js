/* exported isLowerCased */

// check if input is NOT type of 'string'
// if true, return false
// check if input is equal to itself with the toLowerCase method called
// if true, return true
// otherwise, return false

function isLowerCased(word) {
  if (typeof word !== 'string') {
    return false;
  }
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
