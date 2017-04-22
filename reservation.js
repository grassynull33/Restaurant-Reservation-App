// Dependencies
// =============================================================
var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservations = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/tables", function(req, res) {
  var newReservation = req.body;
  console.log(newReservation);

  reservations.push(newReservation);

  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json({ waitlist: true });
});

// Delete reservation
// app.get("/tables#", function(req, res) {
//   return res.json({ waitlist: true });
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});