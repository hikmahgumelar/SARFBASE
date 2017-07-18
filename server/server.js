var express = require('express');
var app = express();
var port = process.env.PORT || 8888;
var io = require('socket.io')(12345)

// start the server
app.listen(port);
console.log('Server jalan.....');
console.log('menungu masukan....');
io.on('connection', function(pesan){
//console.log(pesan);
// routes will go here
app.get('/data', function(req, res) {
var nama_sensor =  req.param('s');
io.emit('pesannih', nama_sensor);
res.send(nama_sensor);


});
});
