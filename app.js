//jshint esversion:6
const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(3000, function() {
  console.log("Running on port 3000.");
});

// const express = require("express");
//
// const app = express();
//
// app.get("/", function(req, res){
//   res.sendFile(__dirname+ "/index.html");
// });
//
// app.listen(3000,function(){
//   console.log("server is running on port 3000.");
// });
// var express = require('express');
// var app = express();
// var path = require('path');
//
// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// app.listen(8080);
