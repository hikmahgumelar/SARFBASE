var express = require('express');
var app = express();
var port = process.env.PORT || 1234;
var io = require('socket.io')(12345)

// start the server
app.listen(port);
console.log('Server jalan.....');
console.log('menungu masukan....');
io.on('connection', function(socket){
console.log('ada yang konek');

// routes will go here
app.get('/', function(req, res) {
var nama_sensor =  req.param('s');
io.emit('alert', nama_sensor);  
});
});