/* exported defaults */

function defaults(target, source) {
  const sourceArray = Object.keys(source);

  for (let i = 0; i < sourceArray.length; i++) {
    const sourceArrayKey = sourceArray[i];
    if (target[sourceArrayKey] === undefined) {
      target[sourceArrayKey] = source[sourceArrayKey];
    }
  }
}

