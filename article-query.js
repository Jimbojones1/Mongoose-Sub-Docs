// We don't have to save this to a variable, because we
// are not doing anything with it
// this file will just run, and connect to the MongoDB for us
require('./db');

// Requiring our Model
const Article = require('./article');


// Were going to make a request to create something in
// mongodb

Article.create({title: 'Old man in the sea', author: 'Hems'}, (err, createdArticle) => {
  if(err){
    console.log(err);
  } else {
    console.log(createdArticle);
  }
});


// Read date from mongoDB using our Model

// Article.find({author: 'Hems'}, (err, foundArticles) => {
//   // remember arguements can be called anythig
//   if(err){
//     console.log(err);
//   } else {
//     // returns any matches, as an array
//     console.log(foundArticles);
//   }
// })

// Update Infromation

// The third argument is an options object, which is saying,
// send us back the updated document
// argument one = The document we are changing
// argument two = What we are updating too

// Article.updateOne({author: 'Hems'}, {$set: {author: 'hemingway'}}, {new: true}, (err, updatedArticle) =>  {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(updatedArticle);
//   }
// })


Article.deleteOne({author: 'hemingway'}, (err, response) => {
  if(err){
    console.log(err);
  } else {
    console.log(response);
  }
});











