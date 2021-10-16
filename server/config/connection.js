const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://boconnor20:Ilovemywife!@cluster0.xuuae.mongodb.net/Gamers?retryWrites=true&w=majority"|| 'mongodb://localhost:27017/Gamers',



  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;

// "mongodb+srv://boconnor20:Ilovemywife!@cluster0.xuuae.mongodb.net/Gamers?retryWrites=true&w=majority"

