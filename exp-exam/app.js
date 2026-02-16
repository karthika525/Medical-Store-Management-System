const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const medicinesRouter = require('./routes/medicines');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/medical_store')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'medstoresecret',
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home', { user: req.session.user });
});

app.use('/', usersRouter);
app.use('/medicines', medicinesRouter);

module.exports=app;