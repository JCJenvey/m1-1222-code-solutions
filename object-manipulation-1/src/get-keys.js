/* exported getKeys */

// define a function named getKeys with 1 argument; object
//   check if object is an object, and NOT an array or null
//     if true:
//     declare a variable and assign it to an empty array
//     begin a loop that iterates through the keys in the 'object' object, where
//       for each key in the object:
//         add the key to the end of the new array
//       return the new array
//   return an empty array

function getKeys(object) {
  if (typeof object === 'object' && !Array.isArray(object) &&
    object !== null) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys;
  }
  return [];
}
