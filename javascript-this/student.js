/* exported student */

var student = {
  firstName: 'Sarah',
  lastName: 'Ryu Ocampo',
  subject: 'Art',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return (
      'Hello, my name is ' +
      this.getFullName() +
      ' and I am studying ' +
      this.subject +
      '.'
    );
  }
};
