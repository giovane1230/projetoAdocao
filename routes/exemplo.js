//exemplo rota com controller

const express = require('express');
const router = express.Router();
const controller = require('../controller/exemploController');
const auth = require('../middlewares/auth');
const exemploValidator = require('../middlewares/exemploValidator');

router.get('/animal', controller.bichinho);
router.get('/todos', controller.pegarTodos);
router.post('/', auth, exemploValidator, controller.create);


module.exports = router;