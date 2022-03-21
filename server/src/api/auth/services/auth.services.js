const USERS = require('../../users/models/users.models');
const bcrypt = require('bcryptjs');
// cloudinary
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'dvtlhph0g',
  api_key: "784957987551196",
  api_secret: 'GmCLmDlAwss6kVGBm1N-PFcNzyM',
  secure: true
})

exports.createUser = async (req, res) => {
  const { password, email, name } = req.body;
  const userExists = await USERS.findOne({ where: { email } });
  if (userExists) {
    res.json({ message: `The email: ${email}, is already used, please try a new email ` })
  } else {
    const resImage = await cloudinary.uploader.upload(req.file.path);
    if (name.length > 8 & email.length > 8) {
      if (password.length >= 6) {
        bcrypt.hash(password, 10, async (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            const data = {
              name,
              email,
              password: hash,
              photo: resImage.secure_url,
              photo_public_id: resImage.public_id
            }
            try {
              const user = await USERS.create(data);
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
      } else {
        res.send({ message: 'Please, your password must be greater than 5 characters' })
      }
    } else {
      res.json({ message: 'Your name, email must be greater then 8 characters' })
    }
  }
}

exports.loginUser = async (req, res) => {
  const {password, email} = req.body;
  const user = await USERS.findOne({where: {email}})
  if(user) {
    bcrypt.compare(password, user.password, async (err, data) => {
      if(data) {
        res.send(user)
      }else {
        res.send('your passoword in not correct')
      }
    } )
  }else {
    res.json({message: 'your user not exists'})
  }
}