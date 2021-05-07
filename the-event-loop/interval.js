let count = 3;

const countDown = setInterval(() => {
  console.log(count);
  count -= 1;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(countDown);
  }
}, 1000);
