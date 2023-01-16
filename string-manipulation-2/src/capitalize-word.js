/* exported capitalizeWord */

// declare a function named capitalizeWords with one argument; word
//   check if word is NOT a string OR word is an empty string
//     if true:
//     return 'Invalid Input'
//   set the value of word to lowercase and check if it is equal to 'javascript'
//     if true:
//     return 'JavaScript'
//   declare a variable and assign it word without the first character
//   declare a second variable and assign it the first character of word
//   return the second variable capitalized concatenated with the first variable
//   set to lowercase

function capitalizeWord(word) {
  if (typeof word !== 'string' || word === '') {
    return 'Invalid Input';
  }
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var newWord = word.slice(1);
  var firstChar = word.charAt(0);

  return firstChar.toUpperCase() + newWord.toLowerCase();
}
