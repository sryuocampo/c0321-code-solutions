/* exported compact */
function compact(input) {
  var array = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i]) {
      array.push(input[i]);
    }
  }
  return array;
}
