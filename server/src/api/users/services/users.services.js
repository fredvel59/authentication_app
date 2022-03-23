const USERS = require('../models/users.models');
const fs = require('fs-extra');
// clodinaary
const clodinaary = require('../../auth/config/cloudinary.config');



exports.getAllUser = async (req, res) => {
  try {
    const allUsers = await USERS.findAll();
    if(allUsers.length > 0) {
      res.send(allUsers);
    } else {
      res.send({message: 'there is no users added yet'})
    }
  } catch (err) {
    res.send(err);
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

exports.editUsersInfo = async (req, res) => {
  const { id } = req.params;
  const { name, bio, phone } = req.body;
  try {
    const user = await USERS.findOne({ where: { user_id: id } });
    if (user) {
      if(name.length <= 50 & name.length > 8) {
        user.set({
          name,
          bio,
          phone,
        })
        await user.save();
      }else {
        res.send({message: 'The name must be greater than 8 and less than 50 characters'})
      }
      res.send({ message: `the user: ${user.name}, was updated sucessfully`, data: user })
    } else {
      res.send({ message: `The user with id: ${id}, dosen't exist` })
    }
  } catch (err) {
    res.send(err)
  }
}

// exports.editUsersInfo = async (req, res) => {
//   const {user_id} = req.params;
//   const { name, bio, phone } = req.body;
//   if(req.file) {
//     const user = await USERS.findOne({ where: {user_id} });
//   if(user) {
//     user.set({
//       name,
//       bio, 
//       phone,
//     })
//     await user.save();
//     res.send({message: `the user: ${user.name}, was updated sucessfully`, data: user})
//   }else {
//     res.send({message: `The user with id: ${user_id}, dosen't exist`})
//   }
//   }else {
//     res.send({message: 'There is no file, please upload a image'})
//   }
//   await fs.unlink(req.file.path);
// }