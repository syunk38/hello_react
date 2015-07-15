var express = require('express');
var router = express.Router();
var fs = require('fs');
// router.get('/', function(req, res){
//   var data = [
//     {author: "Pete Hunt", text: "This is one comment"},
//     {author: "Jordan Walke", text: "This is *私の！* comment"}
//   ];
//   data.name = req.body.name;
//   res.set('Content-Type', 'application/json');
//   res.send(JSON.stringify(data));
//   //res.json(data);
// });

router.get('/', function(req, res) {
  fs.readFile(__dirname + '/json/comments.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.send(JSON.stringify(data));
  });
});

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
