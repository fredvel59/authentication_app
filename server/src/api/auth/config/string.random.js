// function to create a random string.

const randomString = long => {
  const banc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let random = "";
  for (let i = 0; i < long; i++) {
      random += banc.charAt(Math.floor(Math.random() * banc.length));
  }
  return random;
};

module.exports =  randomString(12);