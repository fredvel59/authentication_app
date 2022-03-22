const USERS = require('../../users/models/users.models');
const fs = require('fs-extra');
// library to hashing  passwords
const bcrypt = require('bcryptjs');
// cloudinary library to upload images a cloudinary host
const cloudinary = require('../config/cloudinary.config');



exports.createUser = async (req, res) => {
  const { password, email, name } = req.body;
  const userExists = await USERS.findOne({ where: { email } }); // to find a existing user
  if (userExists) {
    res.json({ message: `The email: ${email}, is already used, please try a new email `})
  } else { // user dosen't exists, it can be created
    const resImage = await cloudinary.uploader.upload(req.file.path);
    if (name.length > 8 & email.length > 8 & password.length >= 6 & name.length < 50) {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          const data = {
            name, // name must be less than 50 characters
            email,
            password: hash,
            photo: resImage.secure_url,
            photo_public_id: resImage.public_id
          }
          try {
            const user = await USERS.create(data); // user created
            res.json({
              message: `The user ${name}, was created successfully`,
              data: user
            })
          } catch (err) {
            res.send({ message: 'Something is not well, try again' })
            console.log(err);
            cloudinary.uploader.destroy(resImage.public_id);
          }
        }
      })
      await fs.unlink(req.file.path) // this code remove images from /auth/images
    } else {
      res.json({ 
        message: "Error, maybe you didn't include characters or you execeeded them",
        numberCharacters: {
          name: "Must be greater than 8 characters and less than 50 characteres",
          email: "Must be greater than 8 characters",
          password: "Must be greater than 6 characters"
        }
      })
    }
  }
}

exports.loginUser = async (req, res) => {
  const {password, email} = req.body;
  const user = await USERS.findOne({where: {email}})
  if(user) {
    bcrypt.compare(password, user.password, async (err, data) => {
      if(data) {
        res.send({auth: true, data: user})
      }else {
        res.send({message: 'your passoword in not correct, try again', auth: false})
      }
    } )
  }else {
    res.json({message: `User with email: ${email} isn't exists`, auth: false})
  }
}