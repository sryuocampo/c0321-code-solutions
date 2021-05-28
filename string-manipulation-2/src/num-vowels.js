/* exported numVowels */

function numVowels(string) {
  const vowels = 'aeiou';
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
