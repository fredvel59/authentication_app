const router = require('express').Router();
// configurations
const { uploadImageMiddleware } = require('../config/multer.config');
// services
const { createUser, loginUser, verifyEmail } = require('../services/auth.services');


// routers
router.post('/signup', uploadImageMiddleware, createUser);
router.post('/login', loginUser);
router.post('/confirmemail/:id', verifyEmail);

module.exports = router;

