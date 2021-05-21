/* exported ransomCase */

function ransomCase(string) {
  const rs = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      rs.push(string[i].toLowerCase());
    } else {
      rs.push(string[i].toUpperCase());
    }
  }
  return rs.join('');
}
