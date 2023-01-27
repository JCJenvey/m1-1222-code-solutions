var $tabContainer = document.querySelector('.tab-container');
var $tab = document.getElementsByClassName('tab');
var $view = document.getElementsByClassName('view');

$tabContainer.addEventListener('click', function (e) {
  if (!e.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tab.length; i++) {
    if ($tab[i] === e.target) {
      $tab[i].className = 'tab active';
    } else {
      $tab[i].className = 'tab';
    }
  }
  var $dataView = e.target.getAttribute('data-view');
  for (i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === $dataView) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
}
);
