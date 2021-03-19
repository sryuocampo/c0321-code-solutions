/* exported sumAll */
function sumAll(numbers) {
  var nums = 0;
  for (var i = 0; i < numbers.length; i++) {
    nums += numbers[i];
  }
  return nums;
}
