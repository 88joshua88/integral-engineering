//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("express");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
})); //converts posted html form data to usable format


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/homePic1.png");
});



app.post('/', (req, res) => {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  console.log(firstName, lastName, email);


});


app.post('/failure', (req, res) => {

  res.redirect("/");
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
