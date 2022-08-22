const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/cliente'));   

module.exports = app;