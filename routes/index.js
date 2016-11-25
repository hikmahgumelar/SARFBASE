var express = require('express');
var router = express.Router();
var io = require('socket.io')(12345)
/* GET home page. */
router.get('/', function(req, res, next) {

var nasen = req.param('s');
console.log(nasen);  

//socket io
io.on('connection', function(socket){
  console.log('ada yang konek');
   socket.emit('alert', nasen);
});
res.render('index', { title: 'Express' });
});

module.exports = router;
