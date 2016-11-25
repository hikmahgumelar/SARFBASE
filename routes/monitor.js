var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mon', function(req, res, next) {
  res.render('monitor', { title: 'monitor' });
});

module.exports = router;
