const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// settings
app.set('port', process.env.PORT || 8000);
// final routers


module.exports = app;