var express = require('express');
var router = express.Router();

var path = require('path'); // 추가

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../public', 'index.html')) // 변경
});

module.exports = router;

