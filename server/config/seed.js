const db = require('./connection');
const mongoose = require('mongoose');
const { Game, Console, Genre, User } = require('../models');

db.once('open', async () => {
  
  await Genre.deleteMany();
  const genre = await Genre.insertMany([
      {type:"Action & Adventure"},
      {type:"Platformer"},
      {type: "Soccer"},
      {type: "Dance"},
      {type: "Football"},
      {type: "Fighting"},
      {type: "RPG"},
      {type: "Wrestling"},
      {type:"Basketball"}
   ]);
  console.log('genre seeded');

  await Console.deleteMany();
  const consoles = await Console.insertMany([
    { name: "Playstation 5"},
    { name:"Xbox One"}
  ]);
  console.log('cosole seeded');


  await Game.deleteMany();
  const games = await Game.insertMany([
     
    { 
      gamename: "Madden NFL 22",
      image:"madden_nfl_22.jpg", 
      price:50.42,  
      quantity:5,
      console: consoles[0]._id,
      genre:   genre[4]._id
    },
    { 
      gamename: 'Mortal Kombat 11 Ultimate',
       image: 'mortal_kombat_11_ultimate.jpg', 
       price:37.50,  
       quantity:6,
       console: consoles[0]._id,
       genre:   genre[5]._id
     },
     { 
      gamename: "Ghost of Tsushima Director's Cut",
      image: 'ghost_of_tsushima_directors_cut.jpg', 
       price:60.00,  
       quantity:7,
       console: consoles[0]._id,
       genre:   genre[0]._id
     },
     { 
      gamename: 'Far Cry 6',
      image: 'farcry_6.jpg', 
       price:64.00,  
       quantity:6,
       console: consoles[0]._id,
       genre:   genre[0]._id
     },
     { 
      gamename: 'NBA 2K22',
      image: 'nba_2k22.jpg', 
       price:64.00,  
       quantity:6,
       console: consoles[0]._id,
       genre:   genre[8]._id
     },
     { 
      gamename: 'FIFA 22',
      image: 'fifa_22.jpg', 
       price:54.30,  
       quantity:4,
       console: consoles[0]._id,
       genre:   genre[2]._id
     },
     { 
      gamename: 'Super Monkey Ball Banana Mania [Anniversary Edition]',
      image: 'super_monkey_ball.jpg',
      price: 39.99,  
      quantity:3,
      console: consoles[0]._id,
      genre:   genre[1]._id
     },
     {
      gamename: 'Tales of Arise',
      image: 'tales_of_arise.jpg',
      price: 52.21,
      quantity: 2,
      console: consoles[0]._id,
      genre:   genre[6]._id
    },
    {
      gamename: 'The Witcher 3 Wild Hunt',
      image: 'witcher_wild_hunt.jpg',
      price: 27.71,
      quantity: 2,
      console: consoles[1]._id,
      genre:   genre[6]._id
    },
    {
      gamename: 'Remnant: From the Ashes',
      image: 'remnant.jpg',
      price: 20.49,
      quantity: 3,
      console: consoles[1]._id,
      genre:   genre[0]._id
    },
    {
      gamename: 'Red Dead Redemption',
      image: 'red_dead_redemption_2.jpg',
      price: 25.99,
      quantity: 4,
      console: consoles[1]._id,
      genre:   genre[0]._id
    },
    {
      gamename: 'NASCAR Ignition',
      image: 'nascar_21.jpg',
      price: 49.99,
      quantity: 5,
      console: consoles[1]._id,
      genre:   genre[1]._id
    },
    {
      gamename: 'Mass Effect Legendary Edition',
      image: 'mass_effect.jpg',
      price: 45.98,
      quantity: 6,
      console: consoles[1]._id,
      genre:   genre[6]._id
    }

     
    
     ]);
  console.log('game seeded');

await User.deleteMany();

  await User.create([
    {
      username: "Alan Kay",
      email: "akay@techfriends.dev",
      password: "password09",
      orders: [
        {
          games: [games[0]._id, games[1]._id, games[2]._id]
        }]
    },
    {
      username: "Max Kanat-Alexander",
      email: "mkanatalexander@techfriends.dev",
      password: "password02",
      orders: [
        {
          games: [games[6]._id, games[5]._id, games[4]._id]
        }]
    },
    {
     username: "Why The Lucky Stiff",
     email: "wtls@techfriends.dev",
     password: "password03",
     orders: [
      {
        games: [games[7]._id, games[6]._id, games[7]._id]
      }]
    },  
    
  ]);

  console.log('users seeded');

  process.exit();
});
