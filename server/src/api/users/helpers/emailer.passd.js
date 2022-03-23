// code to send an email to because user forgot password 
const nodemailer = require('nodemailer');


const newPasswordEmailer  = (email, password) => {
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
    subject: 'New Password',
    text: `This is your new password: ${password}. Now, you can change your password using this password.`
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log(info);
    }else {
      console.log(`Email sent to ${email}`);
    }
  } )
}

module.exports = newPasswordEmailer;