var $container = document.querySelector('.container');
var $openModal = document.querySelector('.open-modal');
var $modalButton = document.querySelector('.modal-button');

$openModal.addEventListener('click', toggleModal);
$modalButton.addEventListener('click', toggleModal);

function toggleModal() {
  $container.classList.toggle('hide');
}
