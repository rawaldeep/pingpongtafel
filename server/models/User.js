const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  Github_id: {
      type: String,
      default: ''
  },
  Name: {
    type: String,
    default: ''
  },
  Profile_pic: {
    type: String,
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false
    }
});

module.exports = mongoose.model('User', UserSchema);
