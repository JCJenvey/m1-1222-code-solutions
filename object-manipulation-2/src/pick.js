/* exported pick */

// declare a function named pick with 2 arguments; source and keys
//   declare a variable named object and assign it an empty object
//   check to see if source is an object AND not an array AND not null AND keys is
//   an array
//     if true:
//       begin a loop iterating an amount of times equal to the properties in source
//         for each property in source:
//           check if the current key is in keys AND if the value of that key is
//           NOT undefined
//             if true:
//               assign that property to object
//   return object

function pick(source, keys) {
  var object = {};
  if ((typeof source === 'object' && !Array.isArray(source) && source !== null) &&
  Array.isArray(keys)) {
    for (var key in source) {
      if (keys.includes(key) && source[key] !== undefined) {
        object[key] = source[key];
      }
    }
  }
  return object;
}
