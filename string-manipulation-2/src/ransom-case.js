/* exported ransomCase */

// declare a function named ransomCase with 1 argument: string
//   check if string is NOT a string OR if string is an empty string
//     if true:
//     return 'Invalid Input'
//   declare a variable and assign it the value of string set to lowercase
//   begin a loop that iterates a number of times equal to the length of the
//   value of string
//     for every other index of string:
//       declare a local variable and assign it the character of string at the
//       current index
//       insert that character capitalized into its original spot
//   return the variable

function ransomCase(string) {
  if (typeof string !== 'string' || string === '') {
    return 'Invalid Input';
  }
  var newString = string.toLowerCase();
  for (var i = 1; i < string.length; i += 2) {
    var char = string.charAt(i);
    newString = newString.substring(0, i) + char.toUpperCase() +
    newString.substring(i + 1);
  }
  return newString;
}
