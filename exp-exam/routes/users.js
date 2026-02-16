const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

router.get('/signup', (req, res)=>{
   res.render('signup',{message:null,error:null})
})

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.render('signup', { message: 'Password and Confirm Password do not match', error: null });
    }
   if (password.length < 6) {
      return res.render('signup', { message: 'Password must be at least 6 characters long', error: null });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render('signup', { message: 'Email already taken', error: null });
    }

    if (!email || !password) {
      return res.render('signup', { message: 'Email and Password are required', error: null });
    }
    

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    const validationError = newUser.validateSync();

    if (validationError) {
      return res.render('signup', { message: null, error: validationError.errors });
    }

    await newUser.save();

    res.redirect('/login');
  } catch (error) {
    res.render('signup', { message: 'Something went wrong', error: error });
  }
});


router.get('/login', (req, res) => {
    res.render('login',{ errors: [],message:null })
});

router.post('/login', 
  [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('login', { errors: errors.array(), message: null });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.render('login', { message: 'Incorrect Email Address.', errors: [] });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.render('login', { message: 'Incorrect password.', errors: [] });
      }

      req.session.user = {
  _id: user._id,
  email: user.email
};
      res.render('home', { user: user });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
);

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
