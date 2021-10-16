const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect("mongodb+srv://boconnor20:Ilovemywife!@cluster0.xuuae.mongodb.net/Gamers?retryWrites=true&w=majority",
=======
mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/Gamers',
>>>>>>> 7c333d9407b0dd7bb91fe83ea9ddf7d894d2e539
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;

// "mongodb+srv://boconnor20:Ilovemywife!@cluster0.xuuae.mongodb.net/Gamers?retryWrites=true&w=majority"