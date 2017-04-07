var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var socket = require('socket.io-client')('http://monitoring.ibstower.com:12345');
var fs = require('fs');
var jsonfile = require('jsonfile')
var file = './public/perintah.json';
var app = express();
app.use(bodyParser.json());
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
	jsonfile.readFile(file, function(err, obj){
	var warna;
	
	if (obj.data[0].light=="on"){
     
     warna = "red";
	 
	}else{
     warna = "black";
	}

	res.render('perintah', { title:"Perintah Pengendali" , status: warna  

,site: "site A"

});
});
});

/* Perintah Pilih */
router.post('/pilih', function(req, res){

function pilih(){
	console.log("dari router post");
}
	

});
/* Perintah ON */

router.get('/on', function(req, res){
	nyala();
	jsonfile.readFile(file, function(err, obj) {

});	
	res.redirect('/perintah');
});

/* Perintah OFF*/

router.get('/off', function(req, res){
padam();
jsonfile.readFile(file, function(err, obj) {
});		
	res.redirect('/perintah');	
});


router.get('/test', function(req, res){
var isinya = req.body.pilih;
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
