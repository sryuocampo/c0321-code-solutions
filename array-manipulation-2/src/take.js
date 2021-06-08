/* exported take */
function take(array, count) {
  var a = [];
  for (let i = 0; i < count && i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
  // array = [0, 1, 2, 3, 4]
  // count = 3
  // a.push(array[0])
  // a.push(array[1])
  // a.push(array[2])
  // return [0, 1, 2]
}
