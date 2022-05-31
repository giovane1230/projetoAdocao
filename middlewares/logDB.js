const fs = require('fs');

function logDB(req, res, nest) {
    fs.appendFileSync('logDB.txt', 'log.txt', 'Foi criado um registro na rota: ' + req.url)

    next();
}

module.exports = logDB;