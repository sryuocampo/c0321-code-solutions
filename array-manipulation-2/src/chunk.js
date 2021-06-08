/* exported chunk */
function chunk(array, size) {
  var a = [];
  for (var i = 0; i < array.length; i++) {
    const last = a[a.length - 1];
    if (!last || last.length === size) {
      a.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return a;
}
