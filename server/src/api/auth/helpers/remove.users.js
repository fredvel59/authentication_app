// this code is to remove users that diden't confirm emails 
const cron = require('node-cron');
const USERS = require('../../users/models/users.models');
//  cloudinary
const cloudinary = require('../config/cloudinary.config');
const { accountRemoved } = require('./nodeEmailer');


const removePhotoFromDatabase = async id => {
  try {
    await cloudinary.uploader.destroy(id);
  } catch (err) {
    console.log(err);
  }
}


const removeUserIfEmailIsNotConfirmed = async id =>  {
  const user = await USERS.findOne({where: {user_id: id}}) 
  const task = cron.schedule('*/10 * * * * *', async () => {
    if(user.verified === false){
      // TODO: please, future me fix this issue, doesen't work
      accountRemoved(user.email);
      removePhotoFromDatabase(user.photo_public_id);
      user.destroy({where: {user_id: id}});
      task.stop();
    }
  })
}

module.exports = removeUserIfEmailIsNotConfirmed;


