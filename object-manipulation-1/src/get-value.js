/* exported getValue */

// define a function named getValue with 2 arguments; object and key
//   check if object is an object, and NOT an array or null. also check if
//   key is NOT an empty string
//     if true:
//     return the value found in object at key
//   return 'Invalid Input'

function getValue(object, key) {
  if (typeof object === 'object' && !Array.isArray(object) &&
  object !== null && key !== '') {
    return object[key];
  }
  return 'Invalid Input';
}
