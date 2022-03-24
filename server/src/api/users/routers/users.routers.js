const router = require('express').Router();
// multer middleware
const { uploadImageMiddleware } = require('../../auth/config/multer.config');
// services
const { getAllUser, removeUser, editUsersInfo, editPhotoProfile, passwordForgotten, changePassword } = require('../services/users.services');


router.get('/all', getAllUser);
router.delete('/remove/:id', removeUser);
router.post('/edit/:id', editUsersInfo)
router.post('/photo/:id', uploadImageMiddleware, editPhotoProfile)
router.get('/newpassd/:id', passwordForgotten);
router.post('/changepasswd/:id', changePassword);

module.exports = router;