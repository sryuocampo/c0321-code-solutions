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
    clearTimeout(done);
    return;
  }

  if (process.argv[2] === 'create') {
    const note = process.argv[3];
    const id = data.nextId++;

    data.notes[id] = note;

    console.log(`${id}: ${data.notes[id]}`);
  } else if (process.argv[2] === 'delete') {
    const deleteId = process.argv[3];
    delete data.notes[deleteId];
  } else if (process.argv[2] === 'update') {
    const updateId = process.argv[3];
    const note = process.argv[4];
    data.notes[updateId] = note;
  }

  fs.writeFile('data.json', JSON.stringify(data, null, 4), 'utf8', () => {
    clearTimeout(done);
  });
});
