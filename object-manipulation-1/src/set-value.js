/* exported setValue */

// define a function named setValue with 3 agruments; object, key and value
//   check if object is an object, and NOT an array or null. also check if
//   key is NOT an empty string
//     if true:
//     set key and vale in object as a key/value pair

function setValue(object, key, value) {
  if (typeof object === 'object' && !Array.isArray(object) &&
    object !== null && key !== '') {
    object[key] = value;
  }
}
