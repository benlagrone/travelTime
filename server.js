var express = require('express');

var app = express();

app.get('/', function(req,res){
res.sendFile(__dirname+'/index.html');
});

app.get('*',function(req,res){
res.sendFile(__dirname+req.path);
});

app.listen(3000, function(){
console.log('Example App is Running');
});
