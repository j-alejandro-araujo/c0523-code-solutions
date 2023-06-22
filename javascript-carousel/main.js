const $slides = document.querySelectorAll('.carousel-slides li');
const $dots = document.querySelectorAll('.dots-container i');
const $prevBtn = document.querySelector('.controls.prev');
const $nextBtn = document.querySelector('.controls.next');

let currentSlide = 0;

for (let i = 0; i < $slides.length; i++) {
  const slide = $slides[i];
  if (i !== currentSlide) {
    slide.style.display = 'none';
  }
}

function showSlide(index) {
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.display = 'none';
  }

  $slides[index].style.display = 'block';

  for (let i = 0; i < $dots.length; i++) {
    if (i === index) {
      $dots[i].classList.add('active');
    } else {
      $dots[i].classList.remove('active');
    }
  }
}

function nextSlide() {
  currentSlide++;
  if (currentSlide === $slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = $slides.length - 1;
  }
  showSlide(currentSlide);
}

let interval = setInterval(nextSlide, 3000);

$nextBtn.addEventListener('click', () => {
  nextSlide();
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
});

$prevBtn.addEventListener('click', () => {
  prevSlide();
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
});

for (let i = 0; i < $dots.length; i++) {
  const dot = $dots[i];

  dot.addEventListener('click', () => {
    showSlide(i);
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
  });
}
