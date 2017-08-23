const mongoose = require('mongoose');
const kitten = require('./models/kittens')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/kittendb');
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));





// const tiger = new kitten({
//   name: "tiger",
//   age: "6 weeks"
// });
// const mittens = new kitten({
//   name: "mittens",
//   age: "2 years"
// })
// const lyla = new kitten({
//   name: "Lyla",
//   age: "6 months"
// })
// const msPriss = new kitten({
//   name: "Ms. Priss",
//   age: "1 year"
// })
//
//
//
// //
// // lyla.save()
//   .then(function() {
//     console.log('saved ' + lyla);
// }).catch(function(error) {
//   console.log('error ' + JSON.stringify(error));
// })


// console.log(new kitten({name: "Oliver"}));
app.get('/', function(req, res) {
    kitten.find().then(function(kittens){
      res.render('kitten-display',{available: kittens});
    })


  });

  app.listen(3000, function() {
    console.log('Successfully started express application!');
  })


process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});