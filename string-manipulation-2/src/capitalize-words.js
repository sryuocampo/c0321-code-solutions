/* exported capitalizeWords */

function capitalizeWords(words) {
  const ws = words.split(' ');
  const cw = [];
  for (let i = 0; i < ws.length; i++) {
    cw.push(ws[i][0].toUpperCase() + ws[i].slice(1).toLowerCase());
  }
  return cw.join(' ');
}
