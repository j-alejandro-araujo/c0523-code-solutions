const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', (event) => {
  console.log('Event Target:', event.target);
  console.log('Event Target tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log($taskListItem);
    $taskListItem.remove();
  }
});
