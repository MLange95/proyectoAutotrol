const createError = require('http-errors');
const express = require('express');
const mysql = require('mysql')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');

require('dotenv').config();

const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact.route');
const { deleteF } = require('./controllers/contact.controller');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: '.hbs',
  layoutsDir: 'views/layouts',
  partialsDir: 'views/partials',
  defaultLayout: 'layout'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));


app.use('/', indexRouter);
app.use('/user', contactRouter);
app.use('/user/:id_falla',deleteF)           


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;