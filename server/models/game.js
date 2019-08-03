const mongoose = require('mongoose');

// define the Game model schema
const GameSchema = new mongoose.Schema({
  session_id: {
    type: String,
    index: { unique: true }
  },
  participants: [{ id: String, score: [] }],
  status: String,
  status_log: []
});


module.exports = mongoose.model('Game', GameSchema);
