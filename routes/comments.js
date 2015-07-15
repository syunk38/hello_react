var express = require('express');
var router = express.Router();

var fs = require('fs');
router.get('/', function(req, res) {
  fs.readFile(process.cwd() + '/json/comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Encoding', 'utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(data);
  });
});

module.exports = router;
