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

// add index to my images

var notSelected = document.createElement('i');
notSelected.setAttribute('class', 'fas fa-circle');

var spanCircle = document.createElement('span');
spanCircle.setAttribute('class', 'not-selected');

spanCircle.appendChild(notSelected);

var selected = document.createElement('i');
selected.setAttribute('class', 'far fa-circle');

var spanSelected = document.createElement('span');
spanSelected.setAttribute('class', 'selected');

spanSelected.appendChild(selected);

var divCircles = document.createElement('div');
divCircles.setAttribute('class', 'circles');

divCircles.append(spanCircle, spanSelected);

var rightArrow = document.createElement('i');
rightArrow.setAttribute('class', 'fas fa-chevron-right');

var divRightArrow = document.createElement('div');
divRightArrow.setAttribute('class', 'right-arrow');

divRightArrow.append(rightArrow, divCircles);

var img = document.createElement('img');
img.setAttribute('id', 'fill-image');
img.setAttribute('src', images);
// double check src

var divImg = document.createElement('div');
divImg.setAttribute('class', 'image');

divImg.append(divRightArrow, img);

var leftArrow = document.createElement('i');
leftArrow.setAttribute('class', 'fas fa-chevron-left');

var divLeftArrow = document.createElement('div');
divLeftArrow.setAttribute('class', 'left-arrow');

divLeftArrow.append(divImg, leftArrow);

var divRow = document.createElement('div');
divRow.setAttribute('class', 'row');

divRow.appendChild(divRow);

var divContainer = document.createElement('div');
divContainer.setAttribute('class', 'container');

divContainer.appendChild(divRow);
