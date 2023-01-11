/* exported toObject */

// define a function named toObject with 1 argument; keyValuePair
//   declare a variable and assign it an empty object
//   check if keyValuePair is NOT an array, OR does NOT have exactly two elements
//     if true:
//     return the new variable
//   use the elements in keyValuePair to create a key/value pair in the object variable
//   return the new variable

function toObject(keyValuePair) {
  var newObject = {};
  if (!Array.isArray(keyValuePair) || keyValuePair.length !== 2) {
    return newObject;
  }
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
