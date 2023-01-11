/* exported numVowels */

// declare a function named numVowels with 1 argument; string
//   declare a variable named count and assign it the number 0
//   check if string is NOT a string OR if string is an empty string
//     if true:
//       return count
//   begin a loop iterating a number of times equal to the length of string
//     for each index in string:
//       check if the characte, set to lowercase, at the index is equal
//       to 'a', 'e', 'i', 'o', or 'u'
//         if true:
//           increment count
//   return count

function numVowels(string) {
  var count = 0;
  if (typeof string !== 'string' || string === '') {
    return count;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' ||
      string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' ||
      string[i].toLowerCase() === 'u') {
      count++;
    }
  }
  return count;
}
