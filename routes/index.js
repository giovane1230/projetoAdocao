var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/quemsomos', function(req, res, next) {
  res.render('quemsomos', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Express' });
});

router.get('/colabore', function(req, res, next) {
  res.render('colabore', { title: 'Express' });
});

module.exports = router;
