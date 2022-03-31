// this code is to do a  generator of user_id
const randomString = require('./string.random');
const uid = () => {
  // const head = Date.now().toString(36);
  const head = new Date().getTime();
  const tail = randomString;
  // const tail = Math.random().toString(36).substr(2);
  const res = head + tail;
  return res
  // return head
}

// console.log(typeof(uid()));
// console.log(uid());

module.exports = uid;