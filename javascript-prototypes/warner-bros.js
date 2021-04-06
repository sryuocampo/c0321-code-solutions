/* exported yakko, wakko, dot */

var warnerPrototype = {
  describe: function () {
    var description =
      this.name + ' is a ' + this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

var yakko = Object.setPrototypeOf({
  age: 14,
  name: 'Yakko',
  role: 'brother'
}, warnerPrototype);

var wakko = Object.setPrototypeOf({
  age: 11,
  name: 'Wakko',
  role: 'brother'
}, warnerPrototype);

var dot = Object.setPrototypeOf({
  age: 10,
  name: 'Dot',
  role: 'sister'
}, warnerPrototype);
