const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const BaseError = require("./errors/BaseError");
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const projectRouter = require('./routes/projects');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

mongoose.connect("mongodb://asserhamad:abc123456@ds217799.mlab.com:17799/ndg-website", {useNewUrlParser: true});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/projects', projectRouter);

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

app.use((err, req, res, next) => {
  console.log(err.error)
  if (err instanceof BaseError) res.status(err.error.code).json(err.error.reason);
});


module.exports = app;
