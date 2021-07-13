/* exported titleCase */

function titleCase(string) {
  const splitString = string.split(' ');

  for (let i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() +
      splitString[i].slice(1);
  }

  const stringTwo = splitString.join(' ');

  return stringTwo;
}
