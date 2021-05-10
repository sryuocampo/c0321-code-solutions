/* exported tail */

function tail(input) {
  var array = [];
  for (var i = 1; i < input.length; i++) {
    array.push(input[i]);
  }
  return array;
}
