var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cookpad_form', { title: 'cookpad' });
});

module.exports = router;
