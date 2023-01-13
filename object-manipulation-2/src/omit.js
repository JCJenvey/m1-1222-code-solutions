/* exported omit */

// declare a function with 2 arguments; source and keys
//   declare a variable named object and assign it an empty object
//   check to see if source is anb object AND source is NOT an array AND source
//   is NOT null AND keys is an array
//     if true:
//       begin a loop iterating an amount of times equal to the properties in source
//         for each property in source:
//           check if the current key is NOT in keys
//             if true:
//               assign that property to object
//   return object

function omit(source, keys) {
  var object = {};
  if ((typeof source === 'object' && !Array.isArray(source) && source !== null) &&
    Array.isArray(keys)) {
    for (var key in source) {
      if (!keys.includes(key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
}
