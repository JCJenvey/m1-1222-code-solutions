var $contactForm = document.getElementById('contact-form');
$contactForm.addEventListener('submit', event => {
  event.preventDefault();
  var messageData = {
    name: $contactForm.elements[0].value,
    email: $contactForm.elements[1].value,
    message: $contactForm.elements[2].value
  };
  console.log('messageData', messageData);
  $contactForm.reset();
});
