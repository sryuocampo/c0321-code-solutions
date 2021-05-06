const fs = require('fs');

const done = setTimeout(
  () => console.log('Program took too long to complete.'),
  30000
);

fs.readFile('data.json', 'utf8', (err, result) => {
  if (err) throw err;
  const data = JSON.parse(result);

  if (process.argv[2] === 'read') {
    for (const id in data.notes) {
      console.log(`${id}: ${data.notes[id]}`);
    }
  }

  fs.writeFile('data.json', JSON.stringify(data, null, 4), 'utf8', () => {
    if (process.argv[2] === 'create') {
      const note = process.argv[3];
      const id = data.nextId++;

      data.notes[id] = note;

      console.log(`${id}: ${data.notes[id]}`);
    } else if (process.argv[2] === 'delete') {
      const deleteId = process.argv[3];

      if (deleteId === data.notes.id) {
        delete data.notes;
      }
    }
    clearTimeout(done);
  });
});

// delete
