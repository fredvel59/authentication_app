// code to send an email to verify email.
const nodemailer = require('nodemailer');

const confirmEmail = (email, key) => {
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
    text: `Please confirm your emil and send us this key: ${key}`
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      // console.log(err);
      console.log(info);
      // return false;
    }else {
      return `Email sent to ${email}`
    }
  } )
}

module.exports = confirmEmail;