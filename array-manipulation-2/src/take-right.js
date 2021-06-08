/* exported takeRight */
function takeRight(array, count) {
  var a = [];
  for (var i = Math.max(0, array.length - count); i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
}
