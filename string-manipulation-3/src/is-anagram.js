/* exported isAnagram */

// declare a function named isAnagram with 2 arguments; firstString and SecondString
//   check to see if firstString is NOT a string OR secondString is NOT a string
//     if true:
//       return false
//   declare a variable and assign it an array of the individual words in firstString
//   make firstString an empty variable
//   begin a loop iterating an amount of times equal to the length of array
//     for each index in array:
//       append the value of that index to firstString
//   declare a variable and assign it an array of the individual words in secondString
//   make secondString an empty variable
//   begin a loop iterating an amount of times equal to the length of array
//     for each index in array:
//       append the value of that index to secondString
//   check to see if the length of firstString and the length of secondString are NOT equal
//     if true:
//       return false
//   declare a variable and assign it the length of firstString
//   begin a loop iterating an amount of times equal to the length of firstString
//     for each character in firstString:
//       check to see if that character while lowercase is in secondString while lowercase
//         if true:
//           remove the found character from secondString
//           remove the current character from firstString
//         otherwise:
//           return false
//   return true

function isAnagram(firstString, secondString) {
  if (typeof firstString !== 'string' || typeof secondString !== 'string') {
    return false;
  }
  var tempArray = firstString.split(' ');
  firstString = '';
  for (var i = 0; i < tempArray.length; i++) {
    firstString += tempArray[i];
  }
  tempArray = secondString.split(' ');
  secondString = '';
  for (i = 0; i < tempArray.length; i++) {
    secondString += tempArray[i];
  }
  if (firstString.length !== secondString.length) {
    return false;
  }
  firstString = firstString.toLowerCase();
  secondString = secondString.toLowerCase();
  var maxLoops = firstString.length;
  for (i = 0; i < maxLoops; i++) {
    if (secondString.includes(firstString[0])) {
      secondString = secondString.replace(firstString[0], ' ');
      firstString = firstString.slice(1);
    } else {
      return false;
    }
  }
  return true;
}
