const sequelize = require('../../config/database/database');
const { DataTypes } = require('sequelize');

const usersSchema = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.TEXT
  },
  photo: {
    type: DataTypes.TEXT
  },
  bio: {
    type: DataTypes.TEXT
  },
  phone: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.TEXT
  }
}, {
  timestamps: false
} )

module.exports = usersSchema;