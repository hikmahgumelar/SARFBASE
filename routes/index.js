var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongo = require('../config/mongo');
var iot = require('../model/iot');
var app = express();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
app.use(bodyParser.json());
//mongo inisialisasi
mongo.init();
//set email protokol
function kirim(){

var transporter = nodemailer.createTransport(smtpTransport('SMTP',{
    host: '172.21.1.17',
    port: 465,
    secure: true,// secure:true for port 465, secure:false for port 587
    auth: {
        user: 'hikmah.gumelar@ibstower.com',
        pass: 'H1kmah1982'
    },
    tls: {rejectUnauthorized: false},
    debug: true
})
);
var mailOptions = {
    from: '"NOTIFIKASI" <hikmah.gumelar@ibstower.com>', // Pengirim
    to: 'admin@ibstower.com', // Penerima
    subject: 'SUHU RUANG SERVER', // Subject Email
    //text: 'Hello world ?', // plain text body
    html: '<b>PERINGATAN SUHU RUANG SERVER</b>'  // html body
};


	transporter.sendMail(mailOptions, function (err, info){
    if (err) {
    console.log(err);
    }
    console.log("email terkirim");
});
}
/* GET home page. */

router.get('/', function(req, res, next) {
res.render('index', { title: 'Smart Building' });
});
/* Halaman Monitor */
router.get('/monitoring', function(req, res, next) {
iot.find({}, function(err, data){

	res.render('monitor', { title: 'log monitoring', data: data});

});
});
router.get('/mon', function(req, res, next) {
  res.render('livemonitor', { title: 'Live Monitoring'});
});

router.get('/kirim', function(req, res){

kirim();

	res.send(kirim);
});
/* Halaman Perintah */
/*
router.get('/perintah', function(req, res){
	jsonfile.readFile(file, function(err, obj){
if (obj.light=="on"){

warna = "red";
console.log	(warna);
return;
}
warna = "black";
console.log(warna);
	res.render('perintah', { title:"Perintah Pengendali" ,status: warna });

});
});

*/
/* Perintah ON */

router.get('/on', function(req, res){
	nyala();
	jsonfile.readFile(file, function(err, obj) {
});
	 res.redirect("/perintah");

});

/* Perintah OFF*/

router.get('/off', function(req, res){
padam();
jsonfile.readFile(file, function(err, obj) {
});
	 res.redirect("/perintah");

});


router.get('/test', function(req, res){
var isinya = req.body.site;
console.log(isinya);
});
/* Fungsi menyalakan dan mematikan*/

function nyala(){
jsonfile.readFile(file, function(err, obj) {
obj.data[0].light = "on";
jsonfile.writeFile(file, obj, function (err) {console.error(err)
});
});
};

function padam(){
jsonfile.readFile(file, function(err, obj) {
obj.data[0].light = "off";
jsonfile.writeFile(file, obj, function (err) {console.error(err)
});
});
};

module.exports = router;
