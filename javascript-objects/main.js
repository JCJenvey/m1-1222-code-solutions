var student = {
  firstName: 'Jared',
  lastName: 'Jenvey',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value 0f fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Dishwasher';
console.log('value 0f student.livesInIrvine: ', student.livesInIrvine);
console.log('value 0f student.previousOccupation: ', student.previousOccupation);
console.log('value 0f student: ', student);

var vehicle = {
  make: 'USS Enterprise',
  model: 'Yorktown class',
  year: 1936
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log("value 0f vehicle['color']: ", vehicle['color']);
console.log("value 0f vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('value 0f vehicle: ', vehicle);

var pet = {
  name: 'Wicket',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value 0f pet: ', pet);
