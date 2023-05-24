function handleFocus(event) {
  console.log('Focus event has been fired.');
  console.log('Event Target Name:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event has been fired.');
  console.log('Event Target Name:', event.target.name);
}

function handleInput(event) {
  console.log('Event Target Name:', event.target.name);
  console.log('Event Target Value:', event.target.value);
}

const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
