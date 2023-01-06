/* exported filterOutStrings */

function filterOutStrings(values) {
  var notStringValues = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      notStringValues.push(values[i]);
    }
  }
  return notStringValues;
}
