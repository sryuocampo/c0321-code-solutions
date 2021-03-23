/* exported capitalize */

function capitalize(word) {
  var str = word.toLowerCase();
  var capital = str[0].toUpperCase();
  return capital + str.slice(1);
}
