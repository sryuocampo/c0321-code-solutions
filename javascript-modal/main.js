var modal = document.querySelector('.modal');

var modalOpenButton = document.querySelector('.open');
var modalCloseButton = document.querySelector('.modal-close');

modalOpenButton.onclick = function () {
  modal.style.display = 'flex';
};

modalCloseButton.onclick = function () {
  modal.style.display = 'none';
};
