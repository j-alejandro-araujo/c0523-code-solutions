const change = document.querySelector('.sphere-column');

const sphereColumn = document.querySelector('.sphere-column');
const background = document.querySelector('.page-container');

function toggleChange() {
  sphereColumn.classList.toggle('instance-change');
  background.classList.toggle('background-change');
}

change.addEventListener('click', function onClick(event) {
  toggleChange();
});
