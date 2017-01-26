var express = require('express');
var router = express.Router();
//var io = require('socket.io')(12345)
/* GET home page. */
router.get('/', function(req, res, next) {

//socket io
//io.on('connection', function(socket){
 // console.log('ada yang konek');
//io.emit('alert', 'ping dari server');  

res.render('index', { title: 'Smart Building' });
//});
});
module.exports = router;
