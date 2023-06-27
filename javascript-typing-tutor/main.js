const $letters = Array.from(document.querySelectorAll('#phrase span'));
let currentIndex = 0;

$letters[currentIndex].classList.add('active');

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const currentLetter = $letters[currentIndex];

  if (key === currentLetter.textContent.toLowerCase()) {
    currentLetter.classList.remove('wrong');
    currentLetter.classList.add('correct');
    currentIndex++;
    $letters[currentIndex - 1].classList.remove('active');
    if (currentIndex < $letters.length) {
      $letters[currentIndex].classList.add('active');
    }
  } else {
    if (!currentLetter.classList.contains('correct')) {
      currentLetter.classList.add('wrong');
    }
  }
});

document.addEventListener('input', (event) => {
  const input = event.target.value;
  const currentLetter = $letters[currentIndex];

  if (input === currentLetter.textContent.toLowerCase()) {
    currentLetter.classList.remove('wrong');
    currentLetter.classList.add('correct');
    event.target.value = '';

    currentIndex++;
    $letters[currentIndex - 1].classList.remove('active');
    if (currentIndex < $letters.length) {
      $letters[currentIndex].classList.add('active');
    }
  } else {
    currentLetter.classList.remove('correct');
    currentLetter.classList.add('wrong');
  }
});

function resetPhrase() {
  currentIndex = 0;
  $letters.forEach((letter, index) => {
    letter.classList.remove('correct', 'wrong', 'active');
    if (index === 0) {
      letter.classList.add('active');
    }
  });
}

resetPhrase();
