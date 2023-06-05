const $countdownDisplay = document.querySelector('.countdown-display');
let count = 4;

function updateCountdown() {
  if (count === 0) {
    $countdownDisplay.textContent = `~Earth Beeeelooowww~`;
    clearInterval(intervalID);
  } else {
    $countdownDisplay.textContent = count;
    count--;
  }
}

const intervalID = setInterval(updateCountdown, 1000);
