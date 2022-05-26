var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
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

router.get('/dark-mode', (req, res) => {
  res.clearCookie('darkMode');
  req.session.darkMode = !req.session.darkMode;

  res.cookie('darkMode', req.session.darkMode);
  res.redirect('/');
});

module.exports = router;
