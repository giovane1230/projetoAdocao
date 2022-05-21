//Exemplo de controller
const exemploModel = require('../models/exemploModels');
const exemploServices = require('../service/exemploServices');

const exemplo = {
    bichinho: (req, res) => {
        const model = new exemploModel('123', 'scooby', 'cachorro', 'dogue alemao')
        return res.json(model);
    },
    pegarTodos: (req, res) => {
        const model1 = new exemploModel('123', 'scooby', 'cachorro', 'dogue alemao');
        const model2 = new exemploModel('122', 'simba', 'cachorro', 'vira lata');
        const model3 = new exemploModel('121', 'eli', 'gato', 'gato nao tem raça po');
        return res.json([model1, model2, model3])
    }
}


module.exports = exemplo;