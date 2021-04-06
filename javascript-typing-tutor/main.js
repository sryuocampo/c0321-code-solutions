var $span = document.querySelectorAll('span');

for (var i = 0; i < $span.length; i++) {}
var currentPosition = 0;

window.addEventListener('keydown', function (event) {
  if (event.key === $span[currentPosition].textContent) {
    currentPosition++;
  }
});
