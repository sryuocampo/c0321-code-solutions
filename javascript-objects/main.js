var student = {
  firstName: 'Sarah',
  lastName: 'Ocampo',
  age: 25
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Server';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2014
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertable"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Besitos',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
