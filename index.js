var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var fs = require("fs");

app.get("/twitter", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Accessed");
var exec = require('child_process').exec;
var child = exec('twLogin.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});

app.get("/facebook", function(req, res) {
  res.send("<h1>Hello Vedant</h1>");
  console.log("Accessed");
var exec = require('child_process').exec;
var child = exec('fbLogin.vbs', function( error, stdout, stderr)
   {
       if ( error != null ) {
            console.log(stderr);
       }
   });
});

http.listen(80, function() {
  console.log("Listening on *:80");
});
