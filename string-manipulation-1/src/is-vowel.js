/* exported isVowel */

function isVowel(char) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowel.length; i++) {
    if (char === vowel[i] || char === vowel[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}
