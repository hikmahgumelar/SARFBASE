var express = require('express');
var router = express.Router();
var socket = require('socket.io-client')('http://localhost:12345');
var fs = require('fs');
var jsonfile = require('jsonfile')
var file = './public/perintah.json';

//var io = require('socket.io')(12345)
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Smart Building' });
});
/* Halaman Monitor */
router.get('/mon', function(req, res, next) {
	res.render('monitor', { title: 'monitor'});
});

/* Halaman Perintah */

router.get('/perintah', function(req, res){
	res.render('perintah', { title:"Perintah Pengendali" ,status: file.light });
var tombolon = req.query.tombolon;
var tombolof = req.query.tombolof;

});

/* Perintah ON */

router.get('/on', function(req, res){
	nyala();
	jsonfile.readFile(file, function(err, obj) {
res.render('perintah', { title:"Perintah Pengendali" ,status: obj.light });
});	
});

/* Perintah OFF*/

router.get('/off', function(req, res){
		padam();
  jsonfile.readFile(file, function(err, obj) {
res.render('perintah', { title:"Perintah Pengendali" ,status: obj.light });
});		
});


/* Fungsi menyalakan dan mematikan*/

function nyala(){
var obj = {}
obj.light = "on";
jsonfile.writeFile(file, obj, function (err) {console.error(err)
});
};

function padam(){
var obj = {}
obj.light = "off";
jsonfile.writeFile(file, obj, function (err) {console.error(err)
});
};



module.exports = router;
