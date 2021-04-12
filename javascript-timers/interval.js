function changeText(text) {
  var tag = document.getElementsByTagName('h1')[0];
  tag.innerHTML = text;
}

var num = 3;

function countdown() {
  if (num > 0) {
    changeText(num);
  } else {
    changeText('~Earth Beeelooowww Us~');
    clearInterval(id);
  }
  num--;
}

var id = setInterval(countdown, 1000);
