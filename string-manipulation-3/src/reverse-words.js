/* exported reverseWords */

// declare a function named reverseWords with 1 argument; string
//   check to see if string is NOT a string OR if string is an empty string
//     if true:
//       return an empty string
//   declare a variable and assign it an array of the individual words of string
//   declare a variable named reverse and assign it an empty string
//   begin a loop iterating an amount of times equal to the elements in the array
//     for each index in array:
//       check if it is NOT the first iteration
//         if true:
//           append a space to reverse
//       declare a variable and assign it the current element of the array
//       begin a loop iterating an amount of times equal to the length of the new
//       variable, working backwards
//         for each character in the string:
//           append the character at the current location to the variable
//   return reverse

function reverseWords(string) {
  if (typeof string !== 'string' || string === '') {
    return '';
  }
  var words = string.split(' ');
  var reverse = '';
  for (var i = 0; i < words.length; i++) {
    if (i !== 0) {
      reverse += ' ';
    }
    var tempString = words[i];
    for (var j = tempString.length - 1; j >= 0; j--) {
      reverse += tempString.charAt(j);
    }
  }
  return reverse;
}
