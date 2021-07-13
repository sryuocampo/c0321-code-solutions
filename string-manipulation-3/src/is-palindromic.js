/* exported isPalindromic */

function isPalindromic(string) {
  const removeSpace = str => str.replace(/\s/g, '');
  const newString = removeSpace(string);
  const stringLength = newString.length;
  for (let i = 0; i < stringLength; i++) {
    if (newString[i] !== newString[stringLength - 1 - i]) {
      return false;
    }
  }
  return true;
}
