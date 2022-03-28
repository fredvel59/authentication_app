// for test admins

function adminAccess(req, res, next) {
  const admin = req.headers['access-admin'];
  if(admin) {
    if(admin === 'freddy') {
      next();
    }else {
      res.send({message: 'your access-admin key is not correct, you have no access here', access: true})
    }
  }else {
    res.send({
      message: 'You are not a admin user, then only can access to data for users',
      access: false
    })
  }
}

module.exports = adminAccess;