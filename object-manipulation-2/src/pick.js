/* exported pick */
function pick(source, keys) {
  var result = {};
  for (keys in source) {
    if (keys.includes(keys)) {
      result[keys] = source[keys];
    }
  }
  return result;
}
