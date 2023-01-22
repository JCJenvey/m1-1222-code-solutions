var $span = document.querySelectorAll('span');
var $h2 = document.querySelector('h2');
var index = 0;
var wrongLetters = 0;

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (index >= $span.length) {
    return;
  }
  if (event.key === $span[index].textContent) {
    $span[index].className = 'correct';
    index++;
    if (index === $span.length) {
      var accuracy = (($span.length - wrongLetters) / $span.length) * 100;
      $h2.textContent = 'Your typing accuracy is ' + Math.floor(accuracy) + '%';
    } else {
      $span[index].className = 'current-letter';
    }
  } else {
    if ($span[index].className !== 'current-letter wrong') {
      wrongLetters++;
    }
    $span[index].className = 'current-letter wrong';
  }
}
