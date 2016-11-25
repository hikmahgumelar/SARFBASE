var express = require('express');
var router = express.Router();
var socket = require('socket.io-client')('http://localhost:12345');
/* GET home page. */
router.get('/', function(req, res, next) {


res.render('monitor', { title: 'monitor'});

});
module.exports = router;