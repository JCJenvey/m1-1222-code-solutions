/* exported isVowel */

// check if input is NOT type of 'string'
// if true, return false
// check if input is an empty string ('')
// if true, return false
// check if input is longer than one character
// if true, return false
// check if input with the toLowerCase method called is equal to
// 'a', 'e', 'i', 'o', or 'u'
// if true return true
// otherwise, return false;

function isVowel(char) {
  if (typeof char !== 'string') {
    return false;
  }
  if (char === '') {
    return false;
  }
  if (char.length > 1) {
    return false;
  }
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' ||
    char.toLowerCase() === 'i' || char.toLowerCase() === 'o' ||
    char.toLowerCase() === 'u') {
    return true;
  }
  return false;
}
