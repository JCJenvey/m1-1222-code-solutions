/* exported capitalizeWords */

// declare a function named capitalizeWords with one argument; string
//   check if string is NOT a string OR string is an empty string
//     if true:
//     return 'Invalid Input'
//   split string into an array of strings based on whitespace and assign it to a variable
//   declare a variable and assign it an empty string
//   begin a loop iterating an amount of times equal to the length of the array
//     for each index in the array:
//       declare a variable and assign it the string at the index without the first
//       character
//       declare another variable and assign it the first character of the string at
//       the index
//       check if it is the first iteration
//         if true:
//           append to the first variable the character capitalized concatenated
//           with the local variable set to lowercase
//         otherwise:
//           append to the first variable a space (' ') concatenated with the
//           character capitalized concatenated with the local variable set to lowercase
//   return the variable

function capitalizeWords(string) {
  if (typeof string !== 'string' || string === '') {
    return 'Invalid Input';
  }
  var stringArray = string.split(' ');
  var newString = '';
  for (var i = 0; i < stringArray.length; i++) {
    var tempString = stringArray[i].slice(1);
    var char = stringArray[i].charAt(0);
    if (i === 0) {
      newString += char.toUpperCase() + tempString.toLowerCase();
    } else {
      newString += ' ' + char.toUpperCase() + tempString.toLowerCase();
    }
  }
  return newString;
}
