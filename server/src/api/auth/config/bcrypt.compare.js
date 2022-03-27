const bcrypt = require('bcryptjs')


exports.comparePassword = (newPasswd, passwdDB) => {
  let valid = false
  bcrypt.compare(newPasswd, passwdDB, (err, data) => {
    if(err) {
      console.log(err);
    }else if(data) {
      valid = data
    }
  })
  return valid
}

// module.exports = comparePassword