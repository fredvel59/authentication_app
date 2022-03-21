const { Sequelize } = require("sequelize");

const database = new Sequelize('users_auth', 'postres', 'freddy', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const testDatabase = async () => {
  try {
    await database.authenticate();
    console.log('The database is connected sucessfully');
  } catch (err) {
    console.log('Error, trying connect database');
  }
}
testDatabase();

module.exports = testDatabase;