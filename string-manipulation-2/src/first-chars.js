/* exported firstChars */

// declare a variable named firstChars with 2 argumnets; length and string
//   check if length is NOT a number OR string is NOT a string
//     if true:
//       return 'Invalid Input'
//   check if length is less than or equal to the length of string
//     if true:
//       remove the part of string beyond length and assign it to itself
//   return string

function firstChars(length, string) {
  if (typeof length !== 'number' || typeof string !== 'string') {
    return 'Invalid Input';
  }
  if (length <= string.length) {
    string = string.slice(0, length);
  }
  return string;
}
