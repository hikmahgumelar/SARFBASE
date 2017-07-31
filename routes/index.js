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
app.use(bodyParser.urlencoded({ extended: true }));


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

router.post('/tambahIoT', function(req, res, next){
var iotBaru = new iot({
    id: req.body.id,
    tanggal: "N/A",
    site: req.body.site,
    temp: "N/A",
    hum: "N/A",
    door: "N/A",
    acpwr: "N/A"
    
});
console.log(iotBaru);
 iotBaru.save(function(err){

    if(err){
 		console.log('tak dapat di simpan');
 	}else{
 		console.log('berhasil di simpan');
 	      res.redirect('/tambah');
    }
      
 });
      
    
 });
router.get('/tambah', function(req, res){

  res.render('tambahIoT', {title : 'tambah perangkat IoT' })
});




module.exports = router;
