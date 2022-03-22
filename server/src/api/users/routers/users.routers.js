const router = require('express').Router();
const { getAllUser, removeUser } = require('../services/users.services');


router.get('/all', getAllUser);
router.delete('/remove/:id', removeUser);

module.exports = router;