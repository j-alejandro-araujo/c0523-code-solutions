const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.open-modal-button');
const closeBtn = document.querySelector('.close-modal-button');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

openBtn.addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeBtn.addEventListener('click', closeModal);
