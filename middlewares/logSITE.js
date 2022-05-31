const fs = require('fs');

function logSite(req, res, nest) {
    fs.appendFileSync('log.txt', 'O Usuario entrou na url: ')

    next();
}

module.exports = logSite;