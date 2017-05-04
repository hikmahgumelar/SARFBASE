var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var socket = require('socket.io-client')('http://localhost:12345');
var fs = require('fs');
var jsonfile = require('jsonfile')
var file = './public/perintah.json';
var app = express();
var mysql = require('mysql');
app.use(bodyParser.json());

//mysql connectionbase
var koneksiDatabase = mysql.createConnection({
  host : 'localhost',
  user :'root',
  password : 'root',
  database : 'apiweb'
});
//var io = require('socket.io')(12345)
/* GET home page. */
koneksiDatabase.connect();
router.get('/', function(req, res, next) {
	koneksiDatabase.query('SELECT * from orang', function(err, rows, fields) {
	  if (err)
	  console.log(err);
	  else
res.render('index', { title: 'Smart Building', database : rows});

});
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

module.exports = router;
