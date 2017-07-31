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

/* server */
// routes will go here
/*
//socket.on('transmit', function (data) {
 
var getdata = data;
});*/

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

router.post('/tambahIoT', function(req, res ,next){
var iotBaru = new iot({
    id: req.body.namaid,
    tanggal: "-",
    site : req.body.namasite,
    temp: "0",
    hum: "0",
    door: "-",
    acpwr: "-"
    });
    
 iotBaru.save(function(err){
 	if(err){
 		console.log('tak dapat di simpan');
 	}else{
 		console.log('berhasil di simpan');
 	}
      
 });
      res.redirect('/tambah');
    
 });
router.get('/tambah', function(req, res){

  res.render('tambahIoT', {title : 'tambah perangkat IoT' })
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
    
    });"
});
>>>>>>> 3f04919889c2b85d0ef2d5129c4c0534c6241844

router.get('/kirim', function(req, res){

kirim();

	res.send(kirim);
});

router.post('/upload', uploading.single, function (req, res) {
console.log('ada akses upload');
});


module.exports = router;
