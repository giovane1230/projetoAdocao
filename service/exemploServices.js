const exemploModel = require('../models/exemploModels');

const exemploService = {
    ListaAnimais: async () => {
      const animais = await exemploModel.Animais.findAll();
      return animais;
    }
}

module.exports = exemploService;