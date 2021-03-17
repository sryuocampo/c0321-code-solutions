function convertMinutesToSeconds(minutes) {
  var minutesTimesSeconds = 60 * minutes;
  return minutesTimesSeconds;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  var greeting = 'Hey, ' + name + '!';
  return greeting;
}

var greeting = greet('Sarah');
console.log(greeting);

function getArea(width, height) {
  var rectangleArea = width * height;
  return rectangleArea;
}

var areaOfARectangle = getArea(17, 42);
console.log('The area of a rectangle with 17 width and 42 height:', areaOfARectangle);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('First Name:', firstNameResults);

function getLastElement(array) {
  var lastOfArray = array.length - 1;
  var lastElement = array[lastOfArray];
  return lastElement;
}

var lastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('Last Element:', lastElementResults);
