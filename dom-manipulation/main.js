let userClickCount = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

function buttonUpdate(event) {
  if (userClickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (userClickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (userClickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (userClickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (userClickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

function incrementClicks(event) {
  userClickCount++;
  $clickCount.textContent = userClickCount;
  buttonUpdate();
}

$hotButton.addEventListener('click', incrementClicks);
