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
var User = require('../model/User');
var auth = require('../libs/auth');
var passport = require('passport');
var flash = require('connect-flash');
var multer = require('multer');
var filestore = require('fs-extra');
var path = require('path');
mongo.init();


router.get('/api/chart', function(req,res){

  getData(res);

});

//mongo inisialisasi
router.post('/api/log', function (req, res) {
    var Model = require('../model/log'),
        datatablesQuery = require('datatables-query'),
        params = req.body,

        query = datatablesQuery(Model);

    query.run(params).then(function (data) {
        res.json(data);
    }, function (err) {
        res.status(500).json(err);
    });
});
//upload init
/*
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
          callback(null, './uploads');
        },
    filename: function (req, file, callback) {
          callback(null, file.fieldname + '-' + Date.now());
        }
});

var upload = multer({ storage : storage}).single('filegambar');

router.post('/api/upload',function(req,res){

      upload(req,res,function(err) {
                if(err) {
                        return
                        res.send('error');
                        res.end("Error uploading file.");
                    }
                    res.send("kekirim");
                res.end("File is uploaded");
                console.log('uploaded');
            });
});
*/
//ui upload

router.get('/api/upload', function(req, res){
 var gambar = req.param('file');
 var oldpath = gambar;https://medium.com/@nadayar/heroku-fu-multiple-servers-on-one-dyno-6fc68d57b373
 var newpath = './uploads/' + 'bukti.png';
      filestore.copySync(oldpath,newpath, function (err) {
        if (err) throw err;
        res.write('File ke upload');
        res.end();
      });
});


//login
router.get('/login', function(req, res, next) {
    res.render('admin/login',{ pesan: req.flash('pesan'), errors: req.flash('error')} );
});

/**
 * POST login
 */
router.post('/login', function(req, res, next) {
    passport.authenticate('local-login', {
        successRedirect: '/tambah',
        failureRedirect: '/login',
        badRequestMessage: 'Inputan Anda belum lengkap, mohon di lengkapi',
        failureFlash : true
    })(req, res, next)
});
// daftar
router.post('/daftar',
    function(req, res, next) {
        passport.authenticate('local-register', {
            successRedirect: '/login',
            failureRedirect: '/daftar',
            failureFlash : true,
            badRequestMessage: 'Inputan Anda belum lengkap, mohon di lengkapi'
        })(req, res, next);
    });
router.get('/daftar', function(req, res){

 res.render('admin/daftar',{ pesan: req.flash('pesan'), errors: req.flash('error')} );

});
//logout

router.get('/logout',
    function(req, res, next){
        req.logout();
        res.redirect('/');


//functi offline/online
});
var minutes = 1, the_interval = minutes * 60 * 1000;
setInterval(function() {
console.log("update auto  ");
iot.update({}, { $set:{ "status" : "0" } }, { multi : true },function (err ,doc){});
}, 180000);

var versi = "Versi 2.0.5";

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
iot.find({"status":"1"}, function(err,iotonline){
res.render('index', { title: 'Smart Building', jumlahiot: jumlah, iotoffline: iotoffline, iotonline:iotonline, versi: versi});
});
});
});
});
/* Halaman Monitor */
router.get('/monitoring', function(req, res, next) {
iot.find({}, function(err, data){

  res.render('monitor', { title: 'log monitoring', data: data,versi: versi});

});
});

router.get('/mon', function(req, res, next) {

  res.render('log', { title: 'Log Monitoring',versi: versi});

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
router.get('/tambah', auth.BolehMasuk,function(req, res){
  iot.find({}, function(err, data){
var i = data.length + 1;
var idbaru1 = "IBST"+i++;
  res.render('tambahIoT', {title : 'tambah perangkat IoT', idbaru: idbaru1, dataiot: data,versi: versi})
});
});
//edit (ambil data sebelum di edit)
router.get('/:id', function(req, res){
iot.findById(req.params.id,function(err, dataiot){
  if(err)
  iot.find({}, function(err, dataiotfull){
  res.render('edit-iot',{ title: 'edit data IoT',dataiot: dataiot, datafull: dataiotfull,versi: versi});
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

//public uploads

//upload versi2
router.get('/photos', uploadFile, addPhoto)

// file is automatically saved to /public/uploads, let's just set
function uploadFile(req, res, next) {
  if (req.files) {
    req.body.url = "http://localhost:7777" + req.files.file.path.split("/").slice(-2).join("/")
    req.body.path = req.files.file.path.split("/").slice(-2).join("/")
  }
  next()
}

// file upload is optional, it could have come before
function addPhoto(req, res) {
  var eventId = req.param("eventId")
  var e = req.body
  var userId = e.userId ? new ObjectId(e.userId) : undefined
  var photo = new Photo({
      userId        : userId
    , eventId       : new ObjectId(e.eventId)
    , latitude      : e.latitude
    , longitude     : e.longitude
    , path          : e.path
    , url           : e.url
    , type          : e.type
    , title         : e.title
    , description   : e.description
  })

  photo.save(function(err) {
    if (err) return res.send(err.message, 500)
    res.json("OK")
  })
};
//API START FOR GET FROM IOT//
// routes will go here
router.get('/api/data', function(req, res) {
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
module.exports = router;
