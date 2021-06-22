/* exported pick */
function pick(source, keys) {
  var results = {};
  for (var i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[key] !== undefined) {
      results[key] = source[key];
    }
  }
  return results;
}

// source = {foo: 1, bar: 2, baz: 3}
// keys = ['foo', 'baz']
// results = {}
// results.foo = source.foo
// results ['baz'] = source['baz']
// return {foo: 1, baz: 3}
