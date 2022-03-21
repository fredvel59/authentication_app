const USERS = require('../models/users.models');



exports.getAllUser = async (req, res) => {
  const allUsers = await USERS.findAll();
  if(allUsers.length > 0) {
    res.send(allUsers);
  } else {
    res.send({message: 'there is no users added yet'})
  }
}