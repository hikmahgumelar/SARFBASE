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
    id: "0003",
    tanggal: Date.now(),
    site: "JAKARTA",
    temp: "0",
    hum: "0",
    door: "0",
    acpwr: "0"
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




module.exports = router;
