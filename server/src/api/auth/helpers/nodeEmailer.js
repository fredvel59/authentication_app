// code to send an email to verify email.
const nodemailer = require('nodemailer');

const url = 'http://localhost:8000/auth/verifyEmail/';

const confirmEmail = (email, key, name) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fred.vel.dev59@gmail.com',
      pass: 'vaoblcfuawwsmzzp'
    }
  })
  const mailOptions = {
    from: 'fred.vel.dev59@gmail.com',
    to: email,
    subject: 'Confirm Email',
    text: `Hey ${name}, please click in this link to confirm your email: ${url}${key}`
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log(info);
    }else {
      return `Email sent to ${email}`
    }
  } )
}

const accountRemoved = (email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fred.vel.dev59@gmail.com',
      pass: 'vaoblcfuawwsmzzp'
    }
  })
  const mailOptions = {
    from: 'fred.vel.dev59@gmail.com',
    to: email,
    subject: 'Confirm Email',
    text: 'Sorry, we were deleted your account because you did not confirm it '
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log(info);
    }else {
      return `Email sent to ${email}`
    }
  } ) 
}

module.exports = {
  confirmEmail, 
  accountRemoved
}