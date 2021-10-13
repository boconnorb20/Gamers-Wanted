const { Schema, model } = require('mongoose');

const genre = new Schema({
    type: String,
    required:true,
    trim: true,
  }
  );

const genre = model('categories', genre);

module.exports = genre;
