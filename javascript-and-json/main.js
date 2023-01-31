var library = [
  {
    isbn: '978-2966606625',
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien'
  },
  {
    isbn: '978-0361165778',
    title: 'The Way of Kings',
    author: 'Brandon Sanderson'
  },
  {
    isbn: '978-0477631518',
    title: 'Fate/Zero',
    author: 'Gen Urobuchi'
  }
];

console.log('library:', library);
console.log('typeof library:', typeof library);

var libraryStringified = JSON.stringify(library);

console.log('libraryStringified:', libraryStringified);
console.log('typeof libraryStringified:', typeof libraryStringified);

var studentStringified = '{"name":"Jimothy Jones","id":6860438}';

console.log('studentStringified:', studentStringified);
console.log('typeof studentStringified:', typeof studentStringified);

var student = JSON.parse(studentStringified);

console.log('student:', student);
console.log('typeof student:', typeof student);
