const db = require('./connection');
const mongoose = require('mongoose');
const { Game, Console, Genre,User } = require('../models');

db.once('open', async () => {
  await Genre.deleteMany();

  const genre = await Genre.insertMany([
      {type:"Action & Adventure"},
      {type:"FPS"},
      {type: "Soccer"},
      {type: "Dance"},
      {type: "Football"},
      {type: "Fighting"},
      {type: "Simulation"},
      {type: "Wrestling"}
   ]);
  console.log('genre seeded');

  await Console.deleteMany();
  const console = await Console.insertMany([
    { name: "Playstation 5"},
    { name:"Xbox One"}
  ]);

  await Game.deleteMany();

  const game = await Game.insertMany([
      { 
        gamename: "Assassin's Creed Valhalla",
        image:"https://commondatastorage.googleapis.com/images.pricecharting.com/053387512bd9bc3100b09b73d9d8512a0803fad65feb76f6ff8cf50e1cecede0/240.jpg", 
        price:28.4,  
        quantity:10,
        Console: Console[0]._id,
        genre:   genre[0]
      },
     { 
       gamename: "Call of Duty: Black Ops Cold War",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/65dcb1ba0249cc469791fd480cd0a3ace1640539c71b570d18520f63168943bd/240.jpg", 
       price:45.53,  
       quantity:5,
       Console: Console[0]._id,
       genre:   genre[1]._id
     },
     { 
       gamename: "FIFA 22",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/ff37c9d997a2a9a3dbf0e411943a909b00d092d6f09afe0bc1e99053d82c8099/240.jpg", 
       price:54.3,  
       quantity:6,
       Console: Console[0]._id,
       genre:   genre[2]._id
     },
     { 
       gamename: "Just Dance 2021",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/89a1c5f5a4f39f74273a65fea8cda1c70e86211a0c534dd4c623c11d7d93a306/240.jpg", 
       price:23,  
       quantity:8,
       Console: Console[0]._id,
       genre:   genre[3]._id
     },
     { 
       gamename: "Madden NFL 22",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/4630e22aecd1cc5c9a38fe02d27ccdb9b272c271e89a6f6c6896d0a9422d1ae7/240.jpg", 
       price:50,  
       quantity:20,
       Console: Console[0]._id,
       genre:   genre[4]._id
     },
     { 
       gamename: "Marvel Spiderman: Miles Morales [Launch Edition]",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/bde3393a71a91d5ed6043568fd2918826f3881fd6b6424e5ca0051210e8c27d0/240.jpg", 
       price:42.5,  
       quantity:12,
       Console: Console[0]._id,
       genre:   genre[0]._id
     },
     { 
       gamename: "Mortal Kombat 11 Ultimate",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/88c16eddfc575de99fb0153f2686ff0d98a29f26be0b7d03eb97b2c5a39f0cf6/240.jpg", 
       price:37.5,  
       quantity:15,
       Console: Console[0]._id,
       genre:   genre[5]._id
     },
     { 
       gamename: "Fishing Sim World",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/0b2fafa97ef22b837196666f63367bcbcabd47bb8e8bf5f127584d0538e035e3/240.jpg", 
       price:37.5,  
       quantity:15,
       Console: Console[1]._id,
       genre:   genre[6]._id
     },
     { 
       gamename: "Gears of War 4 [Collector's Edition Outsider]",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/79a2ea5bdf1da6d0a81607f1ef5b9d280dff8c4a8d39e96c14894e2d155f11b3/240.jpg", 
       price:123.13,  
       quantity:18,
       Console: Console[1]._id,
       genre:   genre[0]._id
     },
     { 
       gamename: "Grand Theft Auto IV",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/6b7f1f35b8aece4402caef16ca9773c119f99bcbc73fa0f53d20da621c41c072/240.jpg", 
       price:132.05,  
       quantity:15,
       Console: Console[1]._id,
       genre:   genre[0]._id
     },
     { 
       gamename: "Power Rangers: Battle for the Grid",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/940cd7e2fe26e634df5c17e0a1f3e31d7a23f24c578b69df939b68ece9ca9c40/240.jpg", 
       price:22.79,  
       quantity:12,
       Console: Console[1]._id,
       genre:   genre[5]._id
     },
     { 
       gamename: "Red Dead Redemption [Game of the Year]",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/a3b6020e5926b6d1be6011214daece8780c56a54cd70e0d63625a43a58f5ea4a/240.jpg", 
       price:17.95,  
       quantity:5,
       Console: Console[1]._id,
       genre:   genre[0]._id
     },
     { 
       gamename: "WWE 2K19 [Woooo Edition]",
       image:"https://commondatastorage.googleapis.com/images.pricecharting.com/0ca3fb33490475fcf369d5b2f50fb68bc9405261c8777832cae38a89b221fab7/240.jpg", 
       price:22,  
       quantity:9,
       Console: Console[1]._id,
       genre:   genre[7]._id
     }
     ]);

await User.deleteMany();

  await User.create([
    {
      username: "Alan Kay",
      email: "akay@techfriends.dev",
      password: "password09",
      orders: [
        {
          game: [game[0]._id, game[1]._id, game[2]._id]
        }]
    },
    {
      username: "Max Kanat-Alexander",
      email: "mkanatalexander@techfriends.dev",
      password: "password02",
      orders: [
        {
          game: [game[8]._id, game[5]._id, game[4]._id]
        }]
    },
    {
     username: "Why The Lucky Stiff",
     email: "wtls@techfriends.dev",
     password: "password03",
     orders: [
      {
        game: [game[7]._id, game[6]._id, game[7]._id]
      }]
    },  
    
  ]);

  console.log('users seeded');

  process.exit();
});
