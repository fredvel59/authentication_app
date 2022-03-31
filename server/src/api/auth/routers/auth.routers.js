const router = require('express').Router();
// configurations
const { uploadImageMiddleware } = require('../config/multer.config');
// services
const { createUser, loginUser, verifyEmail } = require('../services/auth.services');
// token
const { testToken } = require('../config/jwt');



// routers
router.post('/signup', uploadImageMiddleware, createUser);
router.post('/login', loginUser);
router.post('/verifyEmail',  verifyEmail);

const { removeUser } = require('../../users/services/users.services');
router.delete('/remove/:id', removeUser);

module.exports = router;

