/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {
  var firstAndLastInitial = person.firstName[0] + person.lastName[0];
  return firstAndLastInitial;
}
