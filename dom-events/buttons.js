// Click Event
function handleClick(event) {
  console.log('button clicked');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

const $singleClickButton = document.querySelector('.click-button');

$singleClickButton.addEventListener('click', handleClick);

// Mouseover Event
function hanldeMouseover(event) {
  console.log('button hovered');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

const $mouseoverButton = document.querySelector('.hover-button');

$mouseoverButton.addEventListener('mouseover', hanldeMouseover);

// Double-Click Event
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

const $dblClickButton = document.querySelector('.double-click-button');
$dblClickButton.addEventListener('dblclick', handleDoubleClick);
