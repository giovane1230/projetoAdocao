var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var logDbMiddleware = require('../middlewares/logDB');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* router.get('/criando', );
router.post('/criando', upload.any(), logDbMiddleware); */

module.exports = router;
