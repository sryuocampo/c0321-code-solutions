/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var add = [];
  for (var i = 0; i < words.length; i++) {
    add.push(words[i] + suffix);
  }
  return add;
}
