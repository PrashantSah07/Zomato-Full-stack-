const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/authentication');
mongoose.connect('mongodb+srv://PrashantSah:mongo%40123@cluster0.ssllk.mongodb.net/authentication?retryWrites=true&w=majority&appName=Cluster0');

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