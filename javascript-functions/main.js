function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResultOne = convertMinutesToSeconds(5);
var convertMinutesToSecondsResultTwo = convertMinutesToSeconds(7);
console.log('convertMinutesToSecondsResultOne:', convertMinutesToSecondsResultOne);
console.log('convertMinutesToSecondsResultTwo:', convertMinutesToSecondsResultTwo);

function greet(name) {
  return '"Hey, ' + name + '"';
}

var greetResultOne = greet('Beavis');
var greetResultTwo = greet('Araragi');
console.log('greetResultOne:', greetResultOne);
console.log('greetResultTwo:', greetResultTwo);

function getArea(width, height) {
  return width * height;
}

var getAreaResultOne = getArea(17, 42);
var getAreaResultTwo = getArea(20, 55);
console.log('getAreaResultOne:', getAreaResultOne);
console.log('getAreaResultTwo:', getAreaResultTwo);

function getFirstName(person) {
  return '"' + person.firstName + '"';
}

var getFirstNameResultOne = getFirstName({ firstName: 'Lelouch', lastName: 'Lamperouge' });
var getFirstNameResultTwo = getFirstName({ firstName: 'Homura', lastName: 'Akemi' });
console.log('getFirstNameResultOne:', getFirstNameResultOne);
console.log('getFirstNameResultTwo:', getFirstNameResultTwo);

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

var getLastElementResultOne = getLastElement(['propane', 'and', 'propane', 'accessories']);
var getLastElementResultTwo = getLastElement(['I', 'watch', 'too', 'much', 'anime']);
console.log('getLastElementResultOne:', getLastElementResultOne);
console.log('getLastElementResultTwo:', getLastElementResultTwo);
