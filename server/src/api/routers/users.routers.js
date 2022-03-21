const router = require('express').Router();
const { getAllUser } = require('../services/users.services');


router.get('/all', getAllUser);

module.exports = router;