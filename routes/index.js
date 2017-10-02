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
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
          callback(null, './uploads');
        },
    filename: function (req, file, callback) {
          callback(null, file.fieldname + '-' + Date.now());
        }
});

var upload = multer({ storage : storage}).single('gambar');

router.post('/api/upload',function(req,res){
      upload(req,res,function(err) {
                if(err) {
                        return res.end("Error uploading file.");
                    }
                res.end("File is uploaded");
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


//upload gambar

router.get('/gambar', function(req ,res){


    res.send("upload");

});
//functi offline/online
});
var minutes = 1, the_interval = minutes * 60 * 1000;
setInterval(function() {
console.log("update auto  ");
iot.update({}, { $set:{ "status" : "0" } }, { multi : true },function (err ,doc){});
}, 180000);

var versi = "Versi 2.0.4 Beta";

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


function getData(){
log.find({}).limit(30).exec(function(err, hasil){
 if (err) throw err;
 var idArray = [];
 var monthArray = [];
 var tempArray = [];

 for (index in hasil){

    var Nilai = hasil[index];

    var idSite = Nilai['id'];
    var tanggal = Nilai['tanggal'];
    var temp = Nilai['temp'];

 idArray.push({'lokasi': idSite});
 monthArray.push({'bulan': tanggal});
 tempArray.push({'temperatur': temp});

}

var dataset = [
{
    "sitename" : "Riau 23",
    "data" : idArray 

},
{
    "sitename" : "Riau 21",
    "data" :  tempArray 
    
}
];

var response = {

  "dataset": dataset,
  "categories": monthArray
};
 
});
}


module.exports = router;


