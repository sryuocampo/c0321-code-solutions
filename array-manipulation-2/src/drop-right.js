/* exported dropRight */
function dropRight(array, count) {
  var a = [];
  for (var i = 0; i < array.length - count; i++) {
    a.push(array[i]);
  }
  return a;
  // array = [4, 5, 6, 7]
  // count = 1
  // a.push(array[0])
  // a.push(array[1])
  // a.push(array[2])
  // return [4, 5, 6]
}
