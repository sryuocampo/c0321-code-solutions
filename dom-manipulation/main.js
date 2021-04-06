var buttonClicked = 0;

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', incrementClick);

function incrementClick() {
  buttonClicked++;
  clickCount.innerText = 'Clicks: ' + buttonClicked;
  if (buttonClicked < 4) {
    hotButton.className = 'hot-button cold';
  } else if (buttonClicked < 7) {
    hotButton.className = 'hot-button cool';
  } else if (buttonClicked < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (buttonClicked < 13) {
    hotButton.className = 'hot-button warm';
  } else if (buttonClicked < 16) {
    hotButton.className = 'hot-button hot';
  } else if (buttonClicked > 16) {
    hotButton.className = 'hot-button nuclear';
  }
}
