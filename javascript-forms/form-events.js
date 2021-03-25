function handleFocus(event) {
  console.log('focus event fired');
  console.log('  event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('  event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of name:', event.target.name, event.target.value);
}

var inputUserName = document.querySelector('#user-name');

var inputEmail = document.querySelector('#user-email');

var textUserMessage = document.querySelector('#user-message');

inputUserName.addEventListener('focus', handleFocus);
inputUserName.addEventListener('blur', handleBlur);
inputUserName.addEventListener('input', handleInput);

inputEmail.addEventListener('focus', handleFocus);
inputEmail.addEventListener('blur', handleBlur);
inputEmail.addEventListener('input', handleInput);

textUserMessage.addEventListener('focus', handleFocus);
textUserMessage.addEventListener('blur', handleBlur);
textUserMessage.addEventListener('input', handleInput);
