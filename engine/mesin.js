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
var month = ('0' + (dateObj.getMonth()+1)).slice(-2); //months from 1-12
var day = ('0' + dateObj.getDate()).slice(-2);
var year = dateObj.getFullYear();
var jam = ('0' + dateObj.getHours()).slice(-2);
var menit = ('0' + dateObj.getMinutes()).slice(-2);
var detik = dateObj.getSeconds();
tanggalformat = day + "-" + month + "-" + year + "  " + jam + ":" + menit + "        WIB" ;

//var NewIot = new iot({

var id = 	req.param('id'),
tanggal = tanggalformat,
temp =  req.param('b'),
hum =  req.param('c'),
door =  req.param('d'), 
VPR =  req.param('e'),
VPS =  req.param('f'),
VPT =  req.param('g'),
Vaccu =  req.param('h'),
Vrectf=  req.param('i'),
Ir =  req.param('j'),
Is =  req.param('k'),
It =  req.param('l'),
FUEL =  req.param('m'),
GON =  req.param('n'),
GFAIL =  req.param('o'),
DRectf =  req.param('p'),
DGen =  req.param('q'),
ARRSTER =  req.param('r'),
Brectf =  req.param('s'),
MCBTrip =  req.param('t'),
stat = ol;  								     
//io.emit('transmit', id);
iot.findOneAndUpdate({id: id}, {$set:{tanggal: tanggal, temp: temp, hum: hum, door: door, VPR: VPR, VPS: VPS, VPT: VPT, Vaccu : Vaccu,
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

if (id=="IBST1" && temp >= 26 ){

transporter.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
}

var iot = require('../model/iot');

iot.find({"id":id}, function (err, cb) {
  //console.log(cb[0].site);
 var arrdoor = ["CLOSE","OPEN"];
var logBaru = new log({
    id: id,
    site: cb[0].site,
    tanggal: tanggal,
    temp: temp,
    hum: hum,
    door: arrdoor[door],
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
});

});

//}); penutup iot
