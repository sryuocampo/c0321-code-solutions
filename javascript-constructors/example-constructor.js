var ExampleConstructor = function () {};
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor);

var newExampleConstructor = new ExampleConstructor();
console.log(newExampleConstructor);

var similar = newExampleConstructor instanceof ExampleConstructor;
console.log(similar);
