/* exported reverse */
function reverse(input) {
  var array = [];
  for (var i = input.length - 1; i >= 0; i--) {
    array.push(input[i]);
  }
  return array;
}
