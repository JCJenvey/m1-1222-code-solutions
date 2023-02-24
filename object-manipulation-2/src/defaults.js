/* exported defaults */

// declare a function named defaults with 2 arguments: target and source
//   check source and target are objects AND NOT arrays AND NOT null
//     if true:
//       begin a loop iterating equal to the number of properties in source
//         for each key in source:
//           check if that key in target is undefined
//             if true:
//               assign that property to target

function defaults(target, source) {
  if (typeof target === 'object' && !Array.isArray(target) && target !== null &&
  typeof source === 'object' && !Array.isArray(source) && source !== null) {
    for (var key in source) {
      if (target[key] === undefined) {
        target[key] = source[key];
      }
    }
  }
}
