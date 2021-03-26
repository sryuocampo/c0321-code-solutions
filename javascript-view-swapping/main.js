var tabContainer = document.querySelector('.tab-container');

var tabList = tabContainer.querySelectorAll('.tab');

var viewList = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab') !== true) {
    return;
  }
  for (var i = 0; i < tabList.length; i++) {
    if (tabList[i] === event.target) {
      tabList[i].className = 'tab active';
    } else {
      tabList[i].className = 'tab';
    }
  }
  var getDataView = event.target.getAttribute('data-view');
  for (var b = 0; b < viewList.length; b++) {
    if (viewList[b].getAttribute('data-view') === getDataView) {
      viewList[b].className = 'view';
    } else {
      viewList[b].className = 'view hidden';
    }
  }
});
