const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseFloat(process.argv[2]);
const operations = process.argv[3];
const y = parseFloat(process.argv[4]);

if (operations === 'plus') {
  console.log('result:', add(x, y));
} else if (operations === 'minus') {
  console.log('result:', subtract(x, y));
} else if (operations === 'multiplied') {
  console.log('result:', multiply(x, y));
} else if (operations === 'divided') {
  console.log('result:', divide(x, y));
}
