#!/usr/bin/env node

//https://learn.adafruit.com/downloads/pdf/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing.pdf
var express = require('express')
var app = express()


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/www'));


app.get('/', function (req, res) {
  res.render('index',{});
});

var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})


//Timer for reading the thermo IC periodically
var counter = 0;
var interval = setInterval( function() {
  console.log('Bar', counter);
  counter++;
  if (counter >= 3) {
    clearInterval(interval);
  }
}, 1000);
