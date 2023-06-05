const $message = document.querySelector('.message');

function updateHeader() {
  $message.textContent = `Hello There`;
}
setTimeout(updateHeader, 2000);
