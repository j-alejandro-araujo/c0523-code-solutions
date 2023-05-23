function instanceChange() {
  const sphereColumn = document.querySelector('.sphere-column');

  sphereColumn.addEventListener('click', function onClick(event) {
    sphereColumn.classList.toggle('instance-change');
  });
}

instanceChange();

function backgroundChange() {
  const background = document.querySelector('.page-container');

  background.addEventListener('click', function onClick(event) {
    background.classList.toggle('background-change');
  });
}

backgroundChange();
