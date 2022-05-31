var express = require('express');
var router = express.Router();
var contatoController = require('../controller/contatoController');
const loginController = require('../controller/loginController');

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

router.get('/contato', contatoController.contatoView);
router.get('/confirmarcontato', contatoController.confirmarContato);

router.get('/criando', function(req, res, next) {
  res.render('criando', { title: 'Express' });
});

module.exports = router;
