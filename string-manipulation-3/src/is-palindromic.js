/* exported isPalindromic */

// declare a function named isPalindromic with 1 argument; string
//   check to see if string is NOT a string
//     if true:
//       return false
//   declare a variable and assign it an array of the individual words in string
//   make string an empty variable
//   begin a loop iterating an amount of times equal to the length of array
//     for each index in array:
//       append the value of that index to string
//   declare a variable and assign it an empty string
//   begin a loop iterating an amout of times equal to the length of string, working
//   backwards
//     for each character in string:
//       append the character at the current iteration to the variable
//   return the result of if string while lowercase is equal to the variable while lowercase

function isPalindromic(string) {
  if (typeof string !== 'string') {
    return false;
  }
  var tempArray = string.split(' ');
  string = '';
  for (var i = 0; i < tempArray.length; i++) {
    string += tempArray[i];
  }
  var reverse = '';
  for (i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return (string.toLowerCase() === reverse.toLowerCase());
}
