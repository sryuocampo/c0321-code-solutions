var images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];

var numImages = images.length;

var currentPosition = 0;

function nextImage() {
  currentPosition += 1;
  if (currentPosition === images.length) {
    currentPosition = 0;
  }
}

function previousImage() {
  currentPosition -= 1;
  if (currentPosition === -1) {
    currentPosition = images.length - 1;
  }
}

function bubbles(index) {
  currentPosition = index;
}

function getCurrentImage() {
  return images[currentPosition];
}

function drawCircles() {
  var divCircles = document.getElementsByClassName('circles');

  var notSelected = document.createElement('i');
  notSelected.setAttribute('class', 'fas fa-circle');

  var spanNotSelected = document.createElement('span');
  spanNotSelected.setAttribute('class', 'not-selected');

  spanNotSelected.appendChild(notSelected);

  var selected = document.createElement('i');
  selected.setAttribute('class', 'far fa-circle');

  var spanSelected = document.createElement('span');
  spanSelected.setAttribute('class', 'selected');

  spanSelected.appendChild(selected);

  divCircles.append(spanNotSelected, spanSelected);
}

