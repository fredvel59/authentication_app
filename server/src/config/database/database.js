const { Sequelize } = require("sequelize");

const database = new Sequelize('users_auth', 'postgres', 'freddy', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const configDatabase = async () => {
  try {
    await database.authenticate();
    console.log('The database is connected sucessfully');
  } catch (err) {
    console.log('Error connecting database')
  }
}

configDatabase();

module.exports = database;