function getRangeReport(start, end) {
  var total = 0;
  var odds = [];
  var evens = [];
  var range = [];
  for (var i = start; i <= end; i++) {
    total += i;
    range.push(i);
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
    var average = total / range.length;
  }
  return {
    total: total,
    odds: odds,
    evens: evens,
    range: range,
    average: average,
  };
}
