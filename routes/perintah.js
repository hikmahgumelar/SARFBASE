var express = require('express');
var router = express.Router();
var fs = require('fs');
var jsonfile = require('jsonfile')
var file = './public/perintah.json';

jsonfile.readFile(file, function(err, obj) {
status = obj.light;  
})

router.get('/', function(req, res, next) {
res.render('perintah', { title: 'Pengendali perintah' });
matikan();

console.log(file);
});

function matikan(err, berhasil){
var obj = {}
obj.light = "off";

jsonfile.writeFile(file, obj, function (err) {console.error(err)
});
};

function nyalakan(err, berhasil){
var obj = {}
obj.light = "on";

jsonfile.writeFile(file, obj, function (err) {console.error(err)
});
};





module.exports = router;
 
