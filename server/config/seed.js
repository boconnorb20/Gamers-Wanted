const db = require('./connection');
const { User, Game, Console } = require('../models');

db.once('open', async () => {
  await Console.deleteMany();

  const consoles = await Console.insertMany([
    { name: 'Xbox One' },
    { name: 'PlayStation 5' }

  ]);

  await Game.deleteMany();

  const games = await Game.insertMany([
    {
      gamename: 'Madden NFL 22',
      genre: 'Football',
      image: 'madden_nfl_22.jpg',
      console: consoles[1]._id,
      price: 50.42,
      quantity: 5
    },
    {
      gamename: 'Mortal Kombat 11 Ultimate',
      genre: 'Fighting',
      image: 'mortal_kombat_11_ultimate.jpg',
      category: categories[1]._id,
      price: 37.50,
      quantity: 6
    },
    {
      gamename: "Ghost of Tsushima Director's Cut",
      genre: 'Action & Adventure',
      image: 'ghost_of_tsushima_directors_cut.jpg',
      category: categories[1]._id,
      price: 60.00,
      quantity: 7
    },
    {
      gamename: 'Far Cry 6',
      genre: 'Action & Adventure',
      image: 'farcry_6.jpg',
      category: categories[1]._id,
      price: 59.99,
      quantity: 8
    },
    {
      gamename: 'NBA 2K22',
      genre: 'Basketball',
      image: 'nba_2k22.jpg',
      category: categories[1]._id,
      price: 64.00,
      quantity: 6
    },
    {
      gamename: 'FIFA 22',
      genre: 'Soccer',
      image: 'fifa_22.jpg',
      category: categories[1]._id,
      price: 54.30,
      quantity: 4
    },
    {
      gamename: 'Super Monkey Ball Banana Mania [Anniversary Edition]',
      genre: 'Platformer',
      image: 'super_monkey_ball.jpg',
      category: categories[1]._id,
      price: 39.99,
      quantity: 3
    },
    {
      gamename: 'Tales of Arise',
      genre: 'RPG',
      image: 'tales_of_arise.jpg',
      category: categories[1]._id,
      price: 52.21,
      quantity: 2
    }

  ]);

 
  await User.deleteMany();

  await User.create({
    firstName: 'Marcus',
    lastName: 'Aurelius',
    email: 'emperor@123.com',
    password: 'emperor',
    orders: [
      {
        products: [games[0]._id, games[0]._id, games[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Maximus',
    lastName: 'Meridius',
    email: 'gladiator@123.com',
    password: 'gladiator'
  });

  console.log('users seeded');

  process.exit();
});
