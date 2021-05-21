/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const chars = string.split('');
  chars[firstIndex] = string[secondIndex];
  chars[secondIndex] = string[firstIndex];
  return chars.join('');
}
