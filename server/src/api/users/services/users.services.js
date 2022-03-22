const USERS = require('../models/users.models');


exports.getAllUser = async (req, res) => {
  const allUsers = await USERS.findAll();
  if(allUsers.length > 0) {
    res.send(allUsers);
  } else {
    res.send({message: 'there is no users added yet'})
  }
}

exports.removeUser = async (req, res) => {
  const {id} = req.params;
  try {
    const user = await USERS.destroy({where: {user_id: id}})
    res.send({message: `the user ${user.name}, was removed successfully`, data: user})
  } catch (err) {
    res.send(err);
  }
}