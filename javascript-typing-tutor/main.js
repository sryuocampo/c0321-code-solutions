var $span = document.querySelectorAll('span');

var currentPosition = 0;

window.addEventListener('keydown', function (event) {
  if (
    $span[currentPosition] !== undefined &&
    event.key === $span[currentPosition].textContent
  ) {
    $span[currentPosition].className = 'correct';
    currentPosition++;
    if ($span[currentPosition] !== undefined) {
      $span[currentPosition].className = 'next';
    }
  } else if ($span[currentPosition] !== undefined) {
    $span[currentPosition].className = 'error';
  }
});
