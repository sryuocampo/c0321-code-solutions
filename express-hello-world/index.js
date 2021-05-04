var express = require('express');
var app = express();

app.use((req, res) => {
  res.send('I am a string.');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
