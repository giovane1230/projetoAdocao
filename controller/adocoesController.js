const adocoesController = {
    teste: (req, res) => {
        res.send('qualquer coisa ai é so pra testar mesmo')
    },
    deletarAnimal: (req, res) => {
        const {id} = req.params

        res.send('O cadastro do animal foi deletado')
    }
};

module.exports = adocoesController;