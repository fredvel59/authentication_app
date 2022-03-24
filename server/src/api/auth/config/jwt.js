// code to test JWT middleware
const jwt = require('jsonwebtoken');

exports.testToken = async (req, res, next) => {
  const access_token = req.headers['access-token'];
  if(access_token) {
    jwt.verify(access_token, process.env.JWT_KEY, (err, payload) => {
      if(!err) {
        req.user_id = payload.id;
        next();
      }else {
        res.send({message: 'your token is not valid'})
      }
    }  )
  }else {
    res.send({message: "you don't have access here, you need a access token"})
  }
}