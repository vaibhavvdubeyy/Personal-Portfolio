var express = require('express');
var app = express();
var PORT = 8080;
  // Module calling
  const { MongoClient } = require("mongodb");

// Server path
const url = 'mongodb://localhost:27017';

// Name of the database
const dbname = "local";



app.get('/home', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
       
      });
  res.send("home Request Called")
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); 