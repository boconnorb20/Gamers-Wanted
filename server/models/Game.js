const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
  gamename: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  console: {
    type: Schema.Types.ObjectId,
    ref: 'Console',
    required: true
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
