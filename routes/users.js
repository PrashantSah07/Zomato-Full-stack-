const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authentication');

const userSchema = mongoose.Schema({
  username: String,
  mobileNo: String,
  email: String,
  password: String,
  gender: String,
  location: String,
  createdOn: { type: Date, default: Date.now },
})

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);