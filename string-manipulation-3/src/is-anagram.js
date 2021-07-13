/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const removeSpace = str => str.replace(/\s/g, '');

  const firstStringNoSpace = removeSpace(firstString);
  const secondStringNoSpace = removeSpace(secondString);

  const strLengthOne = firstStringNoSpace.length;
  const strLengthTwo = secondStringNoSpace.length;

  if (strLengthOne !== strLengthTwo) {
    return false;
  }

  const stringOne = firstStringNoSpace.split('').sort().join('');
  const stringTwo = secondStringNoSpace.split('').sort().join('');

  if (stringOne === stringTwo) {
    return true;
  } else {
    return false;
  }
}
