const router = require('express').Router();

router.get('/login', (req, res) => {
  res.send('logging in with login')
} )
router.get('/google', (req, res) => {
  res.send('logging in with google')
} )

module.exports = router;