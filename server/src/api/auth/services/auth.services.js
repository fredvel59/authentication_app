// ! npm packages
const bcrypt = require('bcryptjs'); // library to hashing  passwords
const cloudinary = require('../config/cloudinary.config'); // cloudinary library to upload images a cloudinary host
const fs = require('fs-extra'); // to remove files 
const jwt = require('jsonwebtoken'); // json web token
// ! My Functions
const USERS = require('../../users/models/users.models'); // data form the models and datbase
const randomString = require('../helpers/string.random'); // random string
const {confirmEmail} = require('../helpers/nodeEmailer'); // to send a email to user and confirm email 
const removeUserIfEmailIsNotConfirmed = require('../helpers/remove.users');// this code remove a user with email not confirmed
const uid = require('../helpers/uid'); // this code generate a unique ID 



exports.createUser = async (req, res) => {
  const { password, email, name } = req.body;
  const image = req.file;
  const userExists = await USERS.findOne({ where: { email } }); // to find a existing user
  if (userExists) {
    res.json({ message: `The email: ${email}, is already used, please try a new email `})
  } else { // user dosen't exists, it can be created
    if (name.length > 8 & email.length > 8 & password.length >= 6 & name.length < 50) {
      const resImage = image ? await cloudinary.uploader.upload(req.file.path) : null;
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          try {
            const data = {
              user_id: uid(),
              name, // name must be less than 50 characters
              email,
              password: hash,
              photo: image ? resImage.secure_url : '',
              photo_public_id: image ? resImage.public_id : '',
              verify_email: randomString
            }
            const user = await USERS.create(data); // user created
            if(user) {
              removeUserIfEmailIsNotConfirmed(user.user_id);
              confirmEmail(user.email, user.verify_email, user.name);
              res.json({
                message: `We sent you a secret key to your Email, please check it out, and send us the key to confirm it. Remember, you only have 6 hours to confirm it, before we remove your account unconfirmed`,
              })
            }
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

exports.verifyEmail = async (req, res) => {
  const { id } = req.params;
  const user = await USERS.findOne({where: {verify_email: id}});
  if(user) {
    user.verified = true;
    user.save();
    res.send({message: 'Your Email was confirmed successfully, now you can logIn yourself'});
  }else {
    res.send({message: 'Your email is not confirmed'})
  }
}


exports.loginUser = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await USERS.findOne({ where: { email } })
    if (user) {
      if (user.verified) {
        bcrypt.compare(password, user.password, async (err, data) => {
          if(err) {
            res.send(err)
          } else if (data) {
            const token = jwt.sign({id: user.user_id }, process.env.JWT_KEY, {expiresIn: 60*60*24*14});
            res.send({ auth: true, token})
          } else {
            res.send({ message: 'your passoword in not correct, try again', auth: false })
          }
        })
      } else {
        res.send({ message: 'please verified your email', emailVerified: false })
      }
    } else {
      res.json({ message: `User with email: ${email} isn't exists`, auth: false })
    }
  } catch (err) {
    res.send(err)
  }
}