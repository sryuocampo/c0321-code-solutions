var formElement = document.querySelector('#contact-form');

function formSubmit(event) {
  event.preventDefault();

  var formName = formElement.elements.name.value;
  var formEmail = formElement.elements.email.value;
  var formMessage = formElement.elements.message.value;
  var message = {
    name: formName,
    email: formEmail,
    message: formMessage
  };
  console.log('message Data', message);
  formElement.reset();

}

formElement.addEventListener('submit', formSubmit);
