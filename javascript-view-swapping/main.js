const $tabContainer = document.querySelector('.tab-container');
const $tabNodeList = document.querySelectorAll('.tab');
const $viewNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', (event) => {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNodeList.length; i++) {
      if ($tabNodeList[i] === event.target) {
        $tabNodeList[i].className = 'tab active';
      } else {
        $tabNodeList[i].className = 'tab';
      }
    }
  }

  const $dataViewAttribute = event.target.getAttribute('data-view');

  for (let i = 0; i < $viewNodeList.length; i++) {
    if ($viewNodeList[i].getAttribute('data-view') === $dataViewAttribute) {
      $viewNodeList[i].className = 'view';
    } else {
      $viewNodeList[i].className = 'view hidden';
    }
  }
});
