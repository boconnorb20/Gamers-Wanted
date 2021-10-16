const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost:27017/Gamers-Wanted',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;

// "mongodb+srv://boconnor20:Ilovemywife!@cluster0.xuuae.mongodb.net/Gamers?retryWrites=true&w=majority"

