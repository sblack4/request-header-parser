/*
 * return something like 
 * {"ipaddress":"68.98.244.80","language":"en-US","software":"Macintosh; Intel Mac OS X 10_12_5"}
 * IP, language, software
 */
var express = require('express');
var strftime = require('strftime');

var port = 8080;
var app = express();


app.all('/', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(parseDate(req.params.DATE)));
})

app.listen(port, function(err, data){
  console.log("express on port " + port);
});
