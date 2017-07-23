var express = require('express');
var app = express();
var port = process.env.PORT || 8888;
var io = require('socket.io')(12345);
var iot = require('../model/iot');
var mongo = require('../config/mongo');
var mongoose = require('mongoose');
// start the server
app.listen(port);
console.log('Server jalan.....');
console.log('menungu masukan....');
//io.on('connection', function(pesan){
mongo.init();
//console.log(pesan);
// routes will go here
app.get('/data', function(req, res) {
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getFullYear();
var jam = dateObj.getHours();
var menit = dateObj.getMinutes();
tanggalformat = day + "/" + month + "/" + year + " Jam  " + jam + ":" + menit + " WIB";

var NewIot = new iot({

id : 	req.param('id'),
tanggal : tanggalformat,
site : req.param('a'),
temp :  req.param('b'),
hum :  req.param('c'),
door :  req.param('d'), 
acpwr : req.param('e')
});

NewIot.save(function (err){
  if (err) {
    console.log("tidak dapat di simpan");
  }else{
   console.log('product berhasil di tambah');
   res.send('mantap');
}
});

//var arrdata1 = { id: id, tanggal1: tanggal, a: site, b: temp, c: hum, d: door, e: acpwr }
//var arrdata2 = { id: id, tanggal1: tanggal, a: site, b: temp, c: hum, d: door, e: acpwr }
//var data = [arrdata1, arrdata2];
//io.emit('transmit', data);
//res.send(data[id]);
//});
//NewIot.save(function (err){
//if (err) {
//	console.log('tidak dapat update');
//}else{
//	console.log('update Suksess...')
});
//}); 

//});
