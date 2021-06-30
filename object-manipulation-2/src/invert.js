/* exported invert */
function invert(source) {
  const invertedObject = {};
  const sourceArray = Object.keys(source);
  for (let i = 0; i < sourceArray.length; i++) {
    invertedObject[source[sourceArray[i]]] = sourceArray[i];
  }
  return invertedObject;
}

// source = {age: NaN, occupation: 'programmer', language: 'JS'}

// return {NaN: 'age', programmer: 'occupation', JavaScript: 'language'}
