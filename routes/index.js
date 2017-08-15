var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongo = require('../config/mongo');
var iot = require('../model/iot');
var log = require('../model/log');
var app = express();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var multer = require('multer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongo inisialisasi
mongo.init();

var minutes = 1, the_interval = minutes * 60 * 1000;
setInterval(function() {
console.log("update auto  ");
iot.update({}, { $set:{ "status" : "0" } }, { multi : true },function (err ,doc){});
}, 180000);


/* server */
// routes will go here
/*
//socket.on('transmit', function (data) {

 

var getdata = data;
});*/

/* GET home page. */

router.get('/', function(req, res, next) {
iot.find({}, function(err, jumlah){
iot.find({"status":"0"}, function(err,iotoffline){
  console.log(iotoffline)
iot.find({"status":"1"}, function(err,iotonline){
  console.log(iotonline)
res.render('index', { title: 'Smart Building', jumlahiot: jumlah, iotoffline: iotoffline, iotonline:iotonline});
});
});
});
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
  iot.find({}, function(err, data){  
    var i = data.length + 1;
var iotBaru = new iot({
    id: "IBST"+i++,
    tanggal: "N/A",
    site: req.body.site,
    temp: "N/A",
    hum: "N/A",
    door: "N/A",
    acpwr: "N/A",
    VPR: "N/A",
    VPS: "N/A",
    VPT: "N/A",
    Vaccu: "N/A",
    Vrectf: "N/A",
    Ir: "N/A",
    Is: "N/A",
    It: "N/A",
    FUEL: "N/A",
    GON: "N/A",
    GFAIL: "N/A",
    DRectf: "N/A",
    DGen: "N/A",
    ARRSTER: "N/A",
    Brectf: "N/A",
    MCBTrip: "N/A",
    alamat: req.body.alamat,
    status: "N/A",

                  
    
});
 iotBaru.save(function(err){

    if(err){
 		console.log('tak dapat di simpan');
 	}else{
 		console.log('berhasil di simpan');
 	      res.redirect('/tambah');
    }
      
 });
});      
    
 });
router.get('/tambah', function(req, res){
  iot.find({}, function(err, data){
var i = data.length + 1;
var idbaru1 = "IBST"+i++;
  res.render('tambahIoT', {title : 'tambah perangkat IoT', idbaru: idbaru1, dataiot: data})
});
});
//edit (ambil data sebelum di edit)
router.get('/:id', function(req, res){
iot.findById(req.params.id,function(err, dataiot){
  if(err)
  iot.find({}, function(err, dataiotfull){ 
  res.render('edit-iot',{ title: 'edit data IoT',dataiot: dataiot, datafull: dataiotfull});
});
});
//edit (simpan perubahan)

router.post('/perubahan/:id',function(req, res){

  var iotBaru = ({
      site: req.body.site,
      harga: req.body.alamat,
      
  });
iot.findByIdAndUpdate(req.params.id, iotBaru, function (err, dataiot){
   res.redirect('/tambah');
});
});
});
//hapus Iot Terdaftar
router.get('/hapus/:id',function(req, res){
iot.findByIdAndRemove(req.params.id,function(err, dataiot){
  res.redirect('/tambah');
  });
});


module.exports = router;
