const cron = require('node-cron');

console.log('is working?');

let num = 0; 

const test = cron.schedule('*/1 * * * * *', () => {
  console.log(`second number ${num}`);
  num += 1
});

if(num == 5) {
  test.stop();
}