var images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
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

function getCurrentImage() {
  return images[currentPosition];
}

function drawCircles() {
  var divCircles = document.getElementById('circles');

  while (divCircles.children[0]) {
    divCircles.removeChild(divCircles.children[0]);
  }

  for (let i = 0; i < numImages; i++) {
    if (i === currentPosition) {
      var selected = document.createElement('i');
      selected.setAttribute('class', 'fas fa-circle');
      divCircles.appendChild(selected);
    } else {
      var notSelected = document.createElement('i');
      notSelected.setAttribute('class', 'far fa-circle');
      divCircles.appendChild(notSelected);
    }
  }
}

function drawImage() {
  const image = getCurrentImage();
  imgContainer.src = image;
}

const imgContainer = document.getElementById('fill-image');
const prevArrow = document.getElementById('left-arrow');
const nextArrow = document.getElementById('right-arrow');
const circlesContainer = document.getElementById('circles');

let autoNext = 0;

function stepping() {
  clearInterval(autoNext);
  autoNext = setInterval(() => {
    nextImage();
    drawImage();
    drawCircles();
  }, 3000);
}

function render() {
  drawImage();
  drawCircles();
  stepping();
}

prevArrow.addEventListener('click', () => {
  previousImage();
  render();
});

nextArrow.addEventListener('click', () => {
  nextImage();
  render();
});

circlesContainer.addEventListener('click', event => {
  for (let i = 0; i < circlesContainer.children.length; i++) {
    if (event.target === circlesContainer.children[i]) {
      currentPosition = i;
      break;
    }
  }
  render();
});

render();
