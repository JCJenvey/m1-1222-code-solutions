var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (e) {
  console.log('event target:', e.target);
  console.log('event target tagname:', e.target.tagName);
  if (e.target && e.target.tagName === 'BUTTON') {
    var $taskListItem = e.target.closest('.task-list-item');
    console.log('closest .task-list-item:', $taskListItem);
    $taskListItem.remove();
  }
});
