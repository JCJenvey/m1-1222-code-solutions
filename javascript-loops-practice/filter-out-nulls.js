/* exported filterOutNulls */

function filterOutNulls(values) {
  var notNullValues = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      notNullValues.push(values[i]);
    }
  }
  return notNullValues;
}
