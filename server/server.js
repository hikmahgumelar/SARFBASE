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

//var NewIot = new iot({

var id = 	req.param('id'),
tanggal = tanggalformat,
temp =  req.param('b'),
hum =  req.param('c'),
door =  req.param('d'), 
acpwr = req.param('e'),
VPR =  req.param('f'),
VPS =  req.param('g'),
VPT =  req.param('h'),
Vaccu =  req.param('i'),
Vrectf=  req.param('j'),
Ir =  req.param('k'),
Is =  req.param('l'),
It =  req.param('m'),
FUEL =  req.param('n'),
GON =  req.param('o'),
GFAIL =  req.param('p'),
DRectf =  req.param('q'),
DGen =  req.param('r'),
ARRSTER =  req.param('s'),
Brectf =  req.param('t'),
MCBTrip =  req.param('u');
  								     
//io.emit('transmit', id);
iot.findOneAndUpdate({id: id}, {$set:{tanggal: tanggal, 
									 temp: temp, 
									 hum: hum, 
									 door: door, 
									 acpwr: acpwr,
									 VPR: VPR,
  								     VPS: VPS,
    								 VPT: VPT,
                                     Vaccu : Vaccu,
    								 Vrectf: Vrectf,
    								 Ir: Ir,
    								 Is: Is,
                                     It: It,
                                     FUEL: FUEL,
                                     GON: GON,
                                     GFAIL : GFAIL,
                                     DRectf: DRectf,
                                     DGen: DGen,
                                     ARRSTER: ARRSTER,
                                     Brectf: Brectf,
                                     MCBTrip: MCBTrip  
									}}, { new: true}, function (err ,doc){
  if (err) {
    console.log(id);
  }else{
   console.log(id + 'product berhasil di tambah');
   res.send(id + ' berhasil di update');
}
});
});
//}); penutup iot
