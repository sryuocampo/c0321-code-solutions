const { response } = require('express');
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  }
});

app.get('/api/grades', (req, res) => {
  const sql = 'select * from "grades"';
  db.query(sql)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.',
      });
    });
});
