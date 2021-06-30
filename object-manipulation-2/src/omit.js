/* exported omit */
function omit(source, keys) {

  const omitted = {};
  const list = Object.keys(source);
  // console.log(list);
  for (var i = 0; i < list.length; i++) {
    if (keys.includes(list[i]) === false) {
      // console.log(list[i]);
      // console.log(source[list[i]]);
      omitted[list[i]] = source[list[i]];
    }
  }
  return omitted;
}
// create object composed of properties of source not listed in keys
// source = ({foo: 1, bar: 2, baz: 3})
// keys = ['foo', 'baz']
// keys[i] = foo
// keys[i] = baz
// 'foo' = 'foo'
// 'baz' = 'baz'
// bar: 2
// return {bar:2}
