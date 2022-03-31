const router = require('express').Router();
const { uploadImageMiddleware } = require('../config/multer.config'); // configurations for multer and upload images
// services
const { createUser, loginUser, verifyEmail } = require('../services/auth.services');


router.post('/signup', uploadImageMiddleware, createUser);
router.post('/login', loginUser);
router.post('/verifyEmail', verifyEmail);


module.exports = router;

