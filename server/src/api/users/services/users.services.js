const USERS = require('../models/users.models');
const fs = require('fs-extra');
// clodinaary
const clodinaary = require('../../auth/config/cloudinary.config');
// nodemailer, newpassword function, to send an email and get it back password.
const newPasswordEmailer = require('../helpers/emailer.passd');
const newPassword = require('../helpers/new.password');
// bcrypt to haching passwords
const bcrypt = require('bcryptjs');



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

exports.editPhotoProfile = async (req, res) => {
  const { id } = req.params;
  if (req.file) {
    const user = await USERS.findOne({ where: { user_id: id } });
    if (user) {
      try {
        await clodinaary.uploader.destroy(user.photo_public_id); // to remove from cloudinary host the last photo
        const resCloudinary = await clodinaary.uploader.upload(req.file.path);
        user.photo = resCloudinary.secure_url;
        user.photo_public_id = resCloudinary.public_id;
        await user.save();
        res.send({ message: `your photo profile, was updated sucessfully`, data: user.photo })
      } catch (err) {
        res.send({ mesage: 'error updating photo profile' })
      }
    await fs.unlink(req.file.path);
    } else {
      res.send({ message: `The user with id: ${user_id}, dosen't exist` })
    }
  } else {
    res.send({ message: 'There is no file, please upload a image' })
  }
}

exports.passwordForgotten = async (req, res) => {
  const {id} = req.params;
  const user = await USERS.findOne({where: {user_id: id}});
  if(user) {
    try {
      const passwd = newPassword;
      bcrypt.hash(passwd, 10, async (err, hash) => {
        if(err) {
          res.send(err)
        } else {
          user.password = hash;
          await user.save();
          newPasswordEmailer(user.email, passwd)
          res.send({ message: `We sent an email to: ${user.email}, please check it out` })
        }
      })
    } catch (err) {
      res.send(err)
    }
  }else {
    res.send({message: `User with id: ${id}, dosen't exist`})
  }
}


exports.changePassword = async (req, res) => {
  const { id } = req.params;
  const { password, newPassword, repeatePassword } = req.body;
  const user = await USERS.findOne({ where: {user_id: id}});
  if(user) {
    // verify password
    if(newPassword === repeatePassword) {
      bcrypt.compare(password, user.password, (err, data) => {
        if(data) {
          bcrypt.hash(newPassword, 10, async (err, hash) => {
            if (err) {
              res.send(err)
            } else {
              user.password = hash;
              await user.save();
              res.send({message: 'your password was changed successfully'})
            }
          })
        }else {
          res.send({message: 'your password is not correct'})
        }
      })   
    }else {
      res.send({message: "your new password dosen't made match, please introduce your new password correct"})
    }
  }else {
    res.send({message: `the user with id: ${id} dosen't exist`  })
  }
}