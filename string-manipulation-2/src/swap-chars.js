/* exported swapChars */

// declare a function named swapChars with three arguments;
// firstIndex, secondIndex, and string
//   check if firstIndex is NOT a number OR secondIndex is NOT a number OR string
//   is NOT a string OR firstIndex is larger than or equal to the length of string
//   OR secondIndex is larger than or equal to the length of string
//     if true:
//       return 'Invalid Input'
//   declare a variable named char1 and assign it the character from string at
//   firstIndex
//   declare a variable named char2 and assign it the character from string at
//   secondIndex
//   return string with insert char2 at firstIndex in string and char1 at
//   secondIndex in string

function swapChars(firstIndex, secondIndex, string) {
  if (typeof firstIndex !== 'number' || typeof secondIndex !== 'number' ||
  typeof string !== 'string' || firstIndex >= string.length ||
  secondIndex >= string.length) {
    return 'Invalid Input';
  }
  var char1 = string.charAt(firstIndex);
  var char2 = string.charAt(secondIndex);
  return string.substring(0, firstIndex) + char2 +
  string.substring(firstIndex + 1, secondIndex) + char1 + string.substring(secondIndex + 1);
}
