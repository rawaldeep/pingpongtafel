const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  // wie doet de reservatie?
  // user_id from UserSchema
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  // welk timeslot: starttijd
  // timeslot_id: String,
  timeslot_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Timeslot'
  },

  // welk type spel: 2 personen / 4 personen / chinese pingpong
  gameType: String,

  // tornooispel?
  tournament: Boolean,
  
  });
  
  module.exports = mongoose.model('Reservation', ReservationSchema);
  