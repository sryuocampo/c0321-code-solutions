const fs = require('fs');

const done = setTimeout(() => console.log('Program took too long to complete.'), 30000);

fs.readFile('data.json', 'utf8', (err, result) => {
  if (err) throw err;
  const data = JSON.parse(result);

  for (const id in data.notes) {
    console.log(`${id}: ${data.notes[id]}`);
  }

  // add notes if process.argv[]

  const note = process.argv[3]; // my note text
  const id = data.nextId++; // 5

  data.notes[id] = note;

  console.log(data);

  fs.writeFile('data.json', JSON.stringify(data, null, 4), 'utf8', () => {
    clearTimeout(done);
  });
});

// delete
