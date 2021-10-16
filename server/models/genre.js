const mongoose = require('mongoose');
const { Schema } = mongoose;
const genreSchema = new Schema({
    type:{
    type:String,
    required:true,
    trim: true,
  },
});

const Genre = mongoose.model('categories', genreSchema);

module.exports = Genre;
