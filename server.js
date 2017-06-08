/*
 * return something like 
 * {"ipaddress":"68.98.244.80","language":"en-US","software":"Macintosh; Intel Mac OS X 10_12_5"}
 * IP, language, software
 */
var express = require('express');
// var strftime = require('strftime');

var port = 8080;
var app = express();


app.all('/', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var ip = req.connection.remoteAddress;
  var lang = req.headers["accept-language"];
  var software = req.headers['user-agent'];
  console.log(req);
  var userInfo = { 
    "ipaddress": ip
    , "language": lang
    , "software": software
  };
  console.log(userInfo);
  res.end(JSON.stringify(userInfo) + "\n");
})

app.listen(port, function(err, data){
  console.log("express on port " + port);
});
