var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function (event) {
  console.log(event.target, event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var taskItemList = event.target.closest('.task-list-item');
  console.log('closest .task-list-item', taskItemList);
  taskItemList.remove();
});
