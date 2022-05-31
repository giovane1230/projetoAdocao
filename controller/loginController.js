const loginController = {
    login : (req, res) => {
        console.log(req.body)

        res.redirect('/')
    }
};


module.exports = loginController;