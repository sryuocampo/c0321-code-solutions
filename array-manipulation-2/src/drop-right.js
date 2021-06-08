/* exported dropRight */
function dropRight(array, count) {
  var a = [];
  for (var i = 0; i < array.length - count; i++) {
    a.push(array[i]);
  }
  return a;
}
