/* exported tail */

function tail(input) {
  var array = [];
  for (var i = 0; i < input.length; i++) {
    if (i === input[0]) {
      return;
    } else {
      array.push(input[i]);
    }
  }
  return array;
}
