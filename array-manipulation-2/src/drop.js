/* exported drop */
function drop(array, count) {
  var a = [];
  for (let i = count; i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
  // array = [3, 4, 5, 6]
  // count = 2
  // a.push(array[2])
  // a.push(array[3])
  // return [5, 6]
}
