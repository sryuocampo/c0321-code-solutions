var isLightOn = false;

var button = document.querySelector('.light-switch');
var background = document.querySelector('div');

function toggleLight() {
  if (isLightOn === false) {
    isLightOn = true;
    button.className = 'light-switch on';
    background.className = 'on';
  } else {
    isLightOn = false;
    button.className = 'light-switch off';
    background.className = 'off';
  }
}
button.addEventListener('click', toggleLight);
