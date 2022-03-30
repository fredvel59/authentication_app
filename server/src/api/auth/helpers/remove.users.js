// this code is to remove users that diden't confirm emails 
const cron = require('node-cron');
const USERS = require('../../users/models/users.models');


const removeUserIfEmailIsNotConfirmed = async id =>  {
  console.log('the user will be remove in 15 seconds');
  const user = await USERS.findOne({where: {user_id: id}}) 
  const task = cron.schedule('*/15 * * * * *', async () => {
    if(user.verified === false){
      user.destroy({where: {user_id: id}});
      // console.log(`the user with id: ${id}, will be removed`);
      console.log(`the user with id ${id} was removed successfully`);
      task.stop();
    }else {
      console.log(`user with id ${id} was verified`);
      task.stop();
    }
  })
}

module.exports = removeUserIfEmailIsNotConfirmed;


