const yup = require('yup');

function isExemploValidator (req, res, next) {
    const schema = yup.object().shape({
        name: yup.string().required(),
        category: yup.string().required(),
        type: yup.string().required()
    });

    if (!schema.isValidSync(req.body)) {
        return res.status(400).json({error: "Invalid data"});
    }
    next();
}

module.exports = isAunthenticated;