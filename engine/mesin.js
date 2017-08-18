var express = require('express');
var app = express();
var port = process.env.PORT || 8888;
var io = require('socket.io')(12345);
var iot = require('../model/iot');
var log = require('../model/log');
var mongo = require('../config/mongo');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
// start the server
app.listen(port);
console.log('Server jalan.....');
console.log('menungu masukan....');
//io.on('connection', function(pesan){
mongo.init();
//initialisais mail
var transporter = nodemailer.createTransport({
    host: 'mail.ibstower.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'hikmah.gumelar@ibstower.com',
        pass: 'H1kmah1982'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});

// routes will go here
app.get('/data', function(req, res) {
var ol = Date.now();
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
MCBTrip =  req.param('u'),
stat = ol;  								     
//io.emit('transmit', id);
iot.findOneAndUpdate({id: id}, {$set:{tanggal: tanggal, temp: temp, hum: hum, door: door, acpwr: acpwr, VPR: VPR, VPS: VPS, VPT: VPT, Vaccu : Vaccu,
Vrectf: Vrectf,Ir: Ir,Is: Is,It: It,FUEL: FUEL,GON: GON,GFAIL : GFAIL,DRectf: DRectf,DGen: DGen,ARRSTER: ARRSTER,Brectf: Brectf,MCBTrip: MCBTrip,status: "1"
}}, { new: true}, function (err ,doc){
  if (err) {
    console.log(id);
  }else{
   console.log(id + 'product berhasil di tambah' + stat);
   res.send(id + ' berhasil di update'  );
	message = {	
    from: '"RUANG SERVER" <ruangserver@ibstower.com>', // listed in rfc822 message header
    to: 'hikmah.gumelar@ibstower.com',
    subject: 'PERINGATAN RUANG SERVER '+ temp + ' Derajat Celcius',
    html: '<h1>RUANG SERVER HIGHTEMP  '+ temp + ' Derajat Celcius </h1>'
	};


if (temp > 33 ){
transporter.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

}
//fungsi log
/*
var iot = require('../model/iot');

iot.find({"id":id}, function (err, cb) {
  //console.log(cb[0].site);
 
var logBaru = new log({
    id: id,
    site: cb[0].site,
    tanggal: tanggal,
    temp: temp,
    hum: hum,
    door: door,
    acpwr: acpwr,
    VPR: VPR,
    VPS: VPS,
    VPT: VPT,
    Vaccu: Vaccu,
    Vrectf: Vrectf,
    Ir: Ir,
    Is: Is,
    It: It,
    FUEL: FUEL,
    GON: GON,
    GFAIL: GFAIL,
    DRectf: DRectf,
    DGen: DGen,
    ARRSTER: ARRSTER,
    Brectf: Brectf,
    MCBTrip: MCBTrip,                      
});

 logBaru.save(function(err){

    if(err){
 		console.log(err);
 	}else{
 		//console.log('berhasil di simpan');
    }
      
 });
});
<<<<<<< HEAD:server/server.js
*/
// akhir fungsi log
=======
>>>>>>> 4a739e72bfe14e6145b2f3661c469544f50e092b:engine/mesin.js
});

});

//}); penutup iot
