// this code generate a new password, this will be sent to the user.

const newPassword = long => {
  const banc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-!@#";
  let random = "";
  for (let i = 0; i < long; i++) {
      random += banc.charAt(Math.floor(Math.random() * banc.length));
  }
  return random;
}

module.exports = newPassword(10);