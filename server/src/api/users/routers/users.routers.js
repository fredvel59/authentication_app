const router = require('express').Router();
// multer middleware
const { testToken } = require('../../auth/config/jwt');
const { uploadImageMiddleware } = require('../../auth/config/multer.config');
// services
const { getAllUser, removeUser, editUsersInfo, editPhotoProfile, passwordForgotten, changePassword, getInfoUsersById } = require('../services/users.services');

// edit user
router.post('/remove', testToken, removeUser);
router.post('/edit/:id', editUsersInfo)
router.post('/photo/:id', uploadImageMiddleware, editPhotoProfile)
router.get('/newpassd', testToken, passwordForgotten); // code to get it back password 
router.post('/changepasswd/:id', changePassword);

// get user's info
router.get('/all', getAllUser);
router.get('/info', testToken, getInfoUsersById);


module.exports = router;