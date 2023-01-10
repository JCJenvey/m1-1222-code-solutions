/* exported reverseWord */

// check if input is NOT type of 'string'
// if true, return 'Invalid Input'
// check if input is an empty string ('')
// if true, return 'Invalid Input'
// assign an empty string to a variable
// assign the length of the input to a variable
// create a loop iterating an amount of times equal to the length of the input
// in the loop:
// use the charAt method to assign the last character in input to the empty string
// use the slice method to remove the end of the input
// out of the loop
// return the variable

function reverseWord(word) {
  if (typeof word !== 'string') {
    return 'Invalid Input';
  }
  if (word === '') {
    return 'Invalid Input';
  }
  var reversed = '';
  var maxLoops = word.length;
  for (var i = 0; i < maxLoops; i++) {
    reversed += word.charAt(word.length - 1);
    word = word.slice(0, word.length - 1);
  }
  return reversed;
}
