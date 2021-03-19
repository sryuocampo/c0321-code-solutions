/* exported oddOrEven */

function oddOrEven(numbers) {
  var or = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      or.push('even');
    } else {
      or.push('odd');
    }
  }
  return or;
}
