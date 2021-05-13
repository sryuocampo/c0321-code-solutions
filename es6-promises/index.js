const takeAChance = require('./take-a-chance');

const returnedPromise = takeAChance('Sarah');

returnedPromise.then(message => {
  console.log(message);
});

returnedPromise.catch(error => {
  console.log(error.message);
});
