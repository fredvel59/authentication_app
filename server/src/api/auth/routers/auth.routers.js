const router = require('express').Router();

const { uploadImageMiddleware } = require('../middlewares/auth.multer');
const { createUser, loginUser } = require('../services/auth.services');

router.post('/signup', uploadImageMiddleware, createUser);

router.post('/login', loginUser);


module.exports = router;