/* exported titleCase */

// declare a function named titleCase with 1 argumnent; title
//   check if title is NOT a string OR if title is an empty string
//     if true:
//       return an empty string
//   declare a variable and assign it an array of the words in title separated by spaces
//   set title to an empty string
//   begin a loop iterating an amount of times equal to the length of the array
//     for each index in the array:
//       declare a variable and assign it the element of the current index
//       check if it is the first iteration
//         if true:
//           call the function capitalize with the variable as an argument and
//           append the return to title
//         otherwise:
//           append a space to title
//           check if the current variable contains a hyphen
//             if true:
//               declare a new variable and assign it an array of words in variable
//               separated by a hyphen
//               call the function captalize with index 0 of the array as an argument
//               and append he return to title
//               appand a hyphen to title
//               call the function captalize with index 1 of the array as an argument
//               and append he return to title
//               assign to the current variable an empty string
//           check if the variable is equal to the words that don't need to be capitalized
//             if true:
//               append the current variable to title
//             otherwise:
//               call the function capitalize with the variable as an argument
//               and append the return to title
//   check if title contains a colon
//     if true:
//       assign to the array title separated by a semicolon
//       assign the first element to title concatenated with ': '
//       grab the first letter from the second element and appent it to title
//       remove the first letter from the second element and append it to title
//   return title
//
// declare a function called captialize with 1 argument; string
//   check if string is an empty string
//     if true:
//       return an empty string
//   check of string is equal to 'javascript'
//     if true:
//       return 'JavaScript'
//   check of string is equal to 'javascript:'
//     if true:
//       return 'JavaScript:'
//   check of string is equal to 'api'
//     if true:
//       return 'API'
//   check of string is equal to 'api:'
//     if true:
//       return 'API:'
//   declare a variable named firstChar and assign it the first character of string
//   declare a variable and assign it string without the first character
//   return firstChar capitalized concatenated with the other variable set to lowercase

function titleCase(title) {
  if (typeof title !== 'string' || title === '') {
    return '';
  }
  var array = title.split(' ');
  title = '';
  for (var i = 0; i < array.length; i++) {
    var currentElement = array[i];
    if (i === 0) {
      title += capitalize(currentElement);
    } else {
      title += ' ';
      if (currentElement.includes('-')) {
        var tempArray = currentElement.split('-');
        title += capitalize(tempArray[0]);
        title += '-';
        title += capitalize(tempArray[1]);
        currentElement = '';
      }
      if (currentElement.toLowerCase() === 'the' ||
        currentElement.toLowerCase() === 'a' || currentElement.toLowerCase() === 'an' ||
        currentElement.toLowerCase() === 'or' || currentElement.toLowerCase() === 'nor' ||
        currentElement.toLowerCase() === 'but' || currentElement.toLowerCase() === 'as' ||
        currentElement.toLowerCase() === 'at' || currentElement.toLowerCase() === 'by' ||
        currentElement.toLowerCase() === 'for' || currentElement.toLowerCase() === 'in' ||
        currentElement.toLowerCase() === 'of' || currentElement.toLowerCase() === 'on' ||
        currentElement.toLowerCase() === 'per' || currentElement.toLowerCase() === 'to' ||
        currentElement.toLowerCase() === 'and') {
        title += currentElement.toLowerCase();
      } else {
        title += capitalize(currentElement);
      }
    }
  }
  if (title.includes(':')) {
    var newArray = title.split(':');
    title = newArray[0] + ': ';
    var char = newArray[1].charAt(1);
    var newString = newArray[1].substring(2);
    title += char.toUpperCase() + newString;
  }
  return title;
}

function capitalize(string) {
  if (string === '') {
    return '';
  }
  if (string.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  if (string.toLowerCase() === 'javascript:') {
    return 'JavaScript:';
  }
  if (string.toLowerCase() === 'api') {
    return 'API';
  }
  if (string.toLowerCase() === 'api:') {
    return 'API:';
  }
  var firstChar = string.charAt(0);
  var newWord = string.slice(1);

  return firstChar.toUpperCase() + newWord.toLowerCase();
}
