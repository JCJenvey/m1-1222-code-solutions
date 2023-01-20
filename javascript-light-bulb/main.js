function clickLightBulb() {
  if ($lightBulb.className === 'light-bulb light-off') {
    $lightBulb.className = 'light-bulb light-on';
    $container.className = 'container light-mode';
  } else {
    $lightBulb.className = 'light-bulb light-off';
    $container.className = 'container dark-mode';
  }
}

var $lightBulb = document.querySelector('.light-bulb');
var $container = document.querySelector('.container');

$lightBulb.addEventListener('click', clickLightBulb);
