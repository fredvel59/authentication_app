const router = require('express').Router();
// multer middleware
const { testToken } = require('../../auth/config/jwt');
const { uploadImageMiddleware } = require('../../auth/config/multer.config');
const adminAccess = require('../config/admin.access');
// services
const { getAllUser, removeUser, editUsersInfo, editPhotoProfile, passwordForgotten, changePassword, getInfoUsersById } = require('../services/users.services');

// edit user
router.post('/remove', testToken, removeUser);
router.post('/edit', testToken, editUsersInfo)
router.post('/photo', uploadImageMiddleware, testToken, editPhotoProfile)
router.get('/newpassd', testToken, passwordForgotten); // code to get it back password 
router.post('/changepasswd', testToken, changePassword);

// get user's info
router.get('/all', getAllUser);
router.get('/info', testToken, getInfoUsersById);


module.exports = router;