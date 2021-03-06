const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// settings
app.set('port', process.env.PORT || 8000);
// final routers
app.use('/users', require('./api/users/routers/users.routers'));
app.use('/auth', require('./api/auth/routers/auth.routers'));

module.exports = app;