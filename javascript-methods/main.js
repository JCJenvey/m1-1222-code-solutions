var num1 = 5;
var num2 = 9;
var num3 = 3;

var biggestNumber = Math.max(num1, num2, num3);
console.log('biggestNumber:', biggestNumber);

var heroes = ['Batman', 'Iron Man', 'Spiderman', 'Deadpool'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Mistborn',
    author: 'Brandon Sanderson'
  },
  {
    title: 'Bakemonogatari',
    author: 'Nisio Isin'
  },
  {
    title: 'Lord of the Rings',
    author: 'J. R. R. Tolkien'
  }
];
var lastBook = library.pop();
var firstBook = library.shift();

console.log('lastBook:', lastBook);
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Jared Jenvey';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
