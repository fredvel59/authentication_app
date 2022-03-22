const USERS = require('../models/users.models');
// clodinaary
const clodinaary = require('../../auth/config/cloudinary.config');

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
    const id_cloudinary = await USERS.findOne({where: {user_id: id}});
    clodinaary.uploader.destroy(id_cloudinary.photo_public_id);
    await USERS.destroy({where: {user_id: id}})
    res.send({message: `the user with id: ${id}, was removed successfully`})
  } catch (err) {
    res.send(err);
  }
}