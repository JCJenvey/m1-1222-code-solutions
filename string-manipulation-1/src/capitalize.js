/* exported capitalize */

// check if input is NOT type of 'string'
// if true, return 'Invalid Input'
// check if input is an empty string ('')
// if true, return 'Invalid Input'
// call the slice method to remove the first characteer from the input and
// assing the result to a variable
// extract the character at location 0 from input using the charAt method
// and assign the result to another variable
// call the toUpperCase method on the second variable, call the toLowerCase method
// on the first variable, concatenate the two variables and return the result

function capitalize(word) {
  if (typeof word !== 'string') {
    return 'Invalid Input';
  }
  if (word === '') {
    return 'Invalid Input';
  }
  var newWord = word.slice(1);
  var firstChar = word.charAt(0);

  return firstChar.toUpperCase() + newWord.toLowerCase();
}
