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

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/project', projectRouter);

app.use((err, req, res, next) => {
  console.log(err.error)
  if (err instanceof BaseError) res.status(err.error.code).json(err.error.reason);
});


module.exports = app;
