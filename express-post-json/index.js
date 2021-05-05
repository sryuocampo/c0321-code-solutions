const express = require('express');
const app = express();

let nextId = 1;

const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(Object.values(grades));
});

app.post('/api/grades', (req, res) => {
  var grade = {
    id: nextId++,
    name: req.body.name,
    course: req.body.course,
    score: parseInt(req.body.score),
  };
  grades[grade.id] = grade;
  res.status(201).send(grade);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// http -v post localhost:3000/api/grades name="Brendan Eich" course="JavaScript" score=100
