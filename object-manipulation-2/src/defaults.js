/* exported defaults */

function defaults(target, source) {
  const sourceArray = Object.keys(source);
  const targetArray = Object.keys(target);

  for (let i = 0; i < sourceArray.length; i++) {
    const sourceArrayKey = sourceArray[i];
    for (let i = 0; i < targetArray.length; i++) {
      const targetArrayKey = targetArray[i];
      if (targetArrayKey !== sourceArrayKey) {
        Object.assign(target, source);
        console.log(target);
      } else if (targetArrayKey.length === 0) {
        target.push(source);
      }
    }
  }
}

// target = {};
// source = {
// foo: 1,
// bar: 2,
// baz: 3
// }

// targetArray= []
// sourceArray = ['foo', 'bar', 'baz']

// []
// sourceArray = 'foo'
// sourceArray = 'bar'
// sourceArray = 'baz'

// [] !== 'foo'
// [] !== 'bar'
// []  !== 'baz'



// target = {
// foo: 1,
// bar: 2,
// baz: 3
// }
