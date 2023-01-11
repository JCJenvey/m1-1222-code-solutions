/* exported getValues */

// define a function named getValues with 1 argument; object
//   check if object is an object, and NOT an array or null
//     if true:
//     declare a variable and assign it to an empty array
//     begin a loop that iterates through the keys in the 'object' object, where
//       for each key in the object:
//         add the value of the key to the end of the new array
//       return the new array
//   return an empty array

function getValues(object) {
  if (typeof object === 'object' && !Array.isArray(object) &&
    object !== null) {
    var values = [];
    for (var key in object) {
      values.push(object[key]);
    }
    return values;
  }
  return [];
}
