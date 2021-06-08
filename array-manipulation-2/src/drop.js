/* exported drop */
function drop(array, count) {
  var a = [];
  for (let i = count; i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
}
