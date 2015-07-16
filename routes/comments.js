var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var jsonFilePath = process.cwd() + '/json/comments.json';

router.get('/', function(req, res) {
  fs.readFile(process.cwd() + '/json/comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Encoding', 'utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
    //res.send(data)
  });
});

router.post('/', function(req, res) {
  fs.readFile(jsonFilePath, function(err, data) {
    var commentData = JSON.parse(data);
    commentData.push(req.body);
    fs.writeFile(jsonFilePath, JSON.stringify(commentData, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Encoding', 'utf-8');
      res.setHeader('Cache-Control', 'no-cache');
      res.json(commentData);
    });
  });
});

module.exports = router;
