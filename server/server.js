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
var site =  req.param('s');
var temp =  req.param('t')
console.log(site + temp);
var hasil = site + temp ;
io.emit('alert', hasil);
res.send(hasil);

 
});
});
