const router = require('express').Router();
// multer middleware
const { uploadImageMiddleware } = require('../../auth/config/multer.config');
// services
const { getAllUser, removeUser, editUsersInfo } = require('../services/users.services');


router.get('/all', getAllUser);
router.delete('/remove/:id', removeUser);
router.post('/edit/:id', editUsersInfo)

module.exports = router;