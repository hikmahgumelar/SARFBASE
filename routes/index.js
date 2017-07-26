var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongo = require('../config/mongo');
var iot = require('../model/iot');
var app = express();
app.use(bodyParser.json());
//var io = require('socket.io')(12345)
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
