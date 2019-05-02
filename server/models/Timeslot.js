const mongoose = require('mongoose');

const TimeslotSchema = new mongoose.Schema({
  // day of the week vb. monday
  day: {
    type: String,
    default: ''
  },

  // starttime vb. 10u30
  starttime: {
    type: String,
    default: ''
    },
  
  // available
  available: {
    type: Boolean,
    default: false
    },

  });
  
  module.exports = mongoose.model('Timeslot', TimeslotSchema);