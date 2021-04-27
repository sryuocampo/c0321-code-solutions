const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

const { title, author, libraryID } = book1;

console.log(
  'The title of the book is ' +
    title +
    ', ' +
    'the author is ' +
    author +
    ', ' +
    'and the library id is ' +
    libraryID
);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const {
  title: title2,
  author: author2,
  libraryID: libraryID1
} = book2;

console.log(
  'The title of the book is ' +
    title2 +
    ', ' +
    'the author is ' +
    author2 +
    ', ' +
    'and the library id is ' +
    libraryID1
);
