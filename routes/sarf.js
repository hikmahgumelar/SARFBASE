var express = require('express');
var router = express.Router();

router.get('/sarf', function(req, res, next) {
  res.render('sarf', { title: 'peta versi 1.0' });
});

module.exports = router;
