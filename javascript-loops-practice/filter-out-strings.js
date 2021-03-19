/* exported filterOutStrings */

function filterOutStrings(values) {
  var filter = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      filter.push(values[i]);
    }
  }
  return filter;
}
