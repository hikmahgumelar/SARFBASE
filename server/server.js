var express = require('express');
var app = express();
var port = process.env.PORT || 8888;
var io = require('socket.io')(12345)
var mysql = require('mysql');
var koneksiDatabase = mysql.createConnection({
  host : 'localhost',
  user :'root',
  password : 'root',
  database : 'apiweb'
});
koneksiDatabase.connect();
// start the server
app.listen(port);
console.log('Server jalan.....');
console.log('menungu masukan....');
io.on('connection', function(pesan){
console.log(pesan);
// routes will go here
app.get('/data', function(req, res) {
var nama_sensor =  req.param('s');
//io.emit('alert', nama_sensor);
res.send(nama_sensor);
if (nama_sensor >= 150 && nama_sensor <= 200){
  io.emit('alert',"10 liter")
} else if (nama_sensor >= 200 && nama_sensor <= 250) {
  io.emit('alert',"15 liter")
}else if (nama_sensor >= 251 && nama_sensor <= 280) {
  io.emit('alert',"20 liter")
}else if (nama_sensor > 280){
  io.emit('alert',"Kosong")
}else {
  io.emit('alert',"")
}

});
});
