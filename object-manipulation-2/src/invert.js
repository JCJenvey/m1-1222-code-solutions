/* exported invert */

// declare a function named invert with 1 argument; source
//   declare a variable named object and assign it an empty object
//   check to see if source is an object AND source is not an array AND source is
//   not null
//     if true:
//       begin a loop iterating an amount of times equal to the number of properties
//       in source
//         for each key in source:
//           assign a new property to object with the value of the current property
//           of source is the key and the key is the value
//   return object

function invert(source) {
  var object = {};
  if (typeof source === 'object' && !Array.isArray(source) && source !== null) {
    for (var key in source) {
      object[source[key]] = key;
    }
  }
  return object;
}
