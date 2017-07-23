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
	var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getFullYear();
var jam = dateObj.getHours();
var menit = dateObj.getMinutes();
tanggal = day + "/" + month + "/" + year + " Jam  " + jam + ":" + menit + " WIB";


var id = 	req.param('id');
var tanggal1 = tanggal;
var site =  req.param('a');
var	temp =  req.param('b');
var	hum =   req.param('c');
var	door =  req.param('d'); 
var	acpwr = req.param('e'); 
var arrdata1 = { id: id, tanggal1: tanggal, a: site, b: temp, c: hum, d: door, e: acpwr }
var arrdata2 = { id: id, tanggal1: tanggal, a: site, b: temp, c: hum, d: door, e: acpwr }
var data = [arrdata1, arrdata2];
io.emit('transmit', data);
res.send(data[id]);

 
});
});
