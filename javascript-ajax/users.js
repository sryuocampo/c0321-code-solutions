var userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  var users = xhr.response;
  for (var i = 0; i < users.response; i++) {
    var user = users[i];
    var userLi = document.createElement('li');
    userLi.textContent = user.name;
    userList.appendChild(userLi);
  }
});
xhr.send();
