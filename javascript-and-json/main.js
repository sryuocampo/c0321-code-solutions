var books = [
  {
    isbn: '03-262021',
    title: 'JSON for Dummies',
    author: 'Douglas Crockford'
  },
  {
    isbn: '03-262020',
    title: 'Help, I Just Want To Sleep! How To Code 101',
    author: 'Sarah Ryu '
  },
  {
    isbn: '02-272021',
    title: '15 minute Dinners',
    author: 'Sarah Ocampo'
  }
];

console.log('books', books);
console.log('type of books', typeof books);

var stringJSON = JSON.stringify(books);

console.log('string JSON', stringJSON);

console.log('type of string JSON', typeof stringJSON);

var student = '{"id":8, "name":"Sarah Ryu"}';

console.log('student', student);

console.log('type of student', typeof student);

var studentObject = JSON.parse(student);

console.log('student object', studentObject);
console.log('type of student object', typeof student);
