var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongo = require('../config/mongo');
var iot = require('../model/iot');
var app = express();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var multer = require('multer');
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
//kirim gambar

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/datagambar')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var uploading = multer({ storage: storage })
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

router.post('/upload', uploading.single, function (req, res) {
console.log('ada akses upload');
});


module.exports = router;
