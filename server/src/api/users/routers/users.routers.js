const router = require('express').Router();
// multer middleware
const { uploadImageMiddleware } = require('../../auth/config/multer.config');
// services
const { getAllUser, removeUser, editUsersInfo, editPhotoProfile, passwordForgotten } = require('../services/users.services');


router.get('/all', getAllUser);
router.delete('/remove/:id', removeUser);
router.post('/edit/:id', editUsersInfo)
router.post('/photo/:id', uploadImageMiddleware, editPhotoProfile)
router.get('/newPassd/:id', passwordForgotten);


module.exports = router;