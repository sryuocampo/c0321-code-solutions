/* exported take */
function take(array, count) {
  var a = [];
  for (let i = 0; i < count && i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
}
