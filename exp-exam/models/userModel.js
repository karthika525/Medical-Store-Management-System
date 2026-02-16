const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   username: String,
  email: {
    type:String,
    required:[true, 'Email field is required']
  },
  password: {
    type:String,
    required:[true, 'Password fields is required']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
