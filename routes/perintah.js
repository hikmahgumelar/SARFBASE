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

});

router.post('/on', function(req, res){
	nyala();

});
router.post('/off', function(req, res){
	padam();

});




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
 
