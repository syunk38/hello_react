var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *私の！* comment"}
  ];
  data.name = req.body.name;
  res.set('Content-Type', 'application/json');
  res.json(data);
});

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
