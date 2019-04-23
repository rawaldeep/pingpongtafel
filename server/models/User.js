const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  FirstName: {
      type: String,
      default: ''
  },
  lastName: {
    type: String,
    default: ''
    },
    email: {
    type: String,
    default: ''
    },
    password: {
    type: String,
    default: ''
    },
    isDeleted: {
    type: Boolean,
    default: false
    }
});

UserSchema.methods.generateHash = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
UserSchema.methods.validPassword = (password)=>{
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);