function changeText() {
  var tag = document.getElementsByTagName('h1')[0];
  tag.innerHTML = 'Hello There';
}

setTimeout(changeText, 2000);
